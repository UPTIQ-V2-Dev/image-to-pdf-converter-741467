# API Specification

This document outlines the complete API specification for the Image-to-PDF Converter application.

## Database Models (Prisma Schema)

```prisma
model User {
  id                 Int              @id @default(autoincrement())
  email              String           @unique
  name               String?
  password           String
  role               String           @default("USER")
  isEmailVerified    Boolean          @default(false)
  createdAt          DateTime         @default(now())
  updatedAt          DateTime         @updatedAt
  tokens             Token[]
  conversionJobs     ConversionJob[]
  conversionHistory  ConversionHistory?
}

model Token {
  id          Int       @id @default(autoincrement())
  token       String
  type        String
  expires     DateTime
  blacklisted Boolean
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
  userId      Int
}

model ConversionJob {
  id           String            @id @default(cuid())
  user         User              @relation(fields: [userId], references: [id])
  userId       Int
  status       String            @default("idle")
  images       ConversionImage[]
  settings     Json
  createdAt    DateTime          @default(now())
  completedAt  DateTime?
  filename     String?
  fileSize     Int?
  downloadUrl  String?
  error        String?
}

model ConversionImage {
  id              String        @id @default(cuid())
  conversionJob   ConversionJob @relation(fields: [conversionJobId], references: [id])
  conversionJobId String
  originalName    String
  fileName        String
  fileSize        Int
  mimeType        String
  width           Int?
  height          Int?
  storageUrl      String
  createdAt       DateTime      @default(now())
}

model ConversionHistory {
  id           Int           @id @default(autoincrement())
  user         User          @relation(fields: [userId], references: [id])
  userId       Int           @unique
  totalJobs    Int           @default(0)
  successJobs  Int           @default(0)
  failedJobs   Int           @default(0)
  lastJobDate  DateTime?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}
```

---

## Authentication Endpoints

### EP: POST /auth/register
DESC: Register a new user account.
IN: body:{name:str!, email:str!, password:str!}
OUT: 201:{user:obj{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:obj{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}}
ERR: {"400":"Invalid input data or email already exists", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/register -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
EX_RES_201: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":false,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:30:45Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-27T15:30:45Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-03T14:30:45Z"}}}

---

### EP: POST /auth/login
DESC: Login with email and password.
IN: body:{email:str!, password:str!}
OUT: 200:{user:obj{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:obj{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}}
ERR: {"400":"Invalid input data", "401":"Invalid email or password", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"password123"}'
EX_RES_200: {"user":{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:30:45Z"},"tokens":{"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-27T15:30:45Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-03T14:30:45Z"}}}

---

### EP: POST /auth/logout
DESC: Logout and blacklist refresh token.
IN: body:{refreshToken:str!}
OUT: 204:{}
ERR: {"400":"Invalid input data", "404":"Refresh token not found", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/logout -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_204: {}

---

### EP: POST /auth/refresh-tokens
DESC: Refresh access and refresh tokens.
IN: body:{refreshToken:str!}
OUT: 200:{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}
ERR: {"400":"Invalid input data", "401":"Invalid or expired refresh token", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/refresh-tokens -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}'
EX_RES_200: {"access":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-10-27T15:30:45Z"},"refresh":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...","expires":"2025-11-03T14:30:45Z"}}

---

### EP: POST /auth/forgot-password
DESC: Request password reset email.
IN: body:{email:str!}
OUT: 204:{}
ERR: {"400":"Invalid input data", "404":"Email not found", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/forgot-password -H "Content-Type: application/json" -d '{"email":"john@example.com"}'
EX_RES_204: {}

---

### EP: POST /auth/reset-password
DESC: Reset password using token from email.
IN: query:{token:str!}, body:{password:str!}
OUT: 204:{}
ERR: {"400":"Invalid input data", "401":"Invalid or expired reset token", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/reset-password?token=abc123" -H "Content-Type: application/json" -d '{"password":"newpassword123"}'
EX_RES_204: {}

---

### EP: POST /auth/verify-email
DESC: Verify email address using token from email.
IN: query:{token:str!}
OUT: 204:{}
ERR: {"400":"Invalid input data", "401":"Invalid or expired verification token", "500":"Internal server error"}
EX_REQ: curl -X POST "/auth/verify-email?token=xyz789"
EX_RES_204: {}

---

### EP: POST /auth/send-verification-email
DESC: Send email verification email to authenticated user.
IN: headers:{Authorization:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/send-verification-email -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_204: {}

---

## User Management Endpoints

### EP: POST /users
DESC: Create a new user (admin only).
IN: headers:{Authorization:str!}, body:{name:str!, email:str!, password:str!, role:str!}
OUT: 201:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input data or email already exists", "401":"Unauthorized", "403":"Forbidden - admin access required", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"Jane Smith","email":"jane@example.com","password":"password123","role":"USER"}'
EX_RES_201: {"id":2,"email":"jane@example.com","name":"Jane Smith","role":"USER","isEmailVerified":false,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:30:45Z"}

---

### EP: GET /users
DESC: Get paginated list of users with optional filtering.
IN: headers:{Authorization:str!}, query:{name:str?, role:str?, sortBy:str?, limit:int?, page:int?}
OUT: 200:{results:arr[obj{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "403":"Forbidden - admin access required", "500":"Internal server error"}
EX_REQ: curl -X GET "/users?page=1&limit=10&role=USER" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"results":[{"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:30:45Z"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

### EP: GET /users/:userId
DESC: Get specific user details.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X GET /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:30:45Z"}

---

### EP: PATCH /users/:userId
DESC: Update user information.
IN: headers:{Authorization:str!}, params:{userId:int!}, body:{name:str?, email:str?, password:str?}
OUT: 200:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input data or email already exists", "401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X PATCH /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"name":"John Updated"}'
EX_RES_200: {"id":1,"email":"john@example.com","name":"John Updated","role":"USER","isEmailVerified":true,"createdAt":"2025-10-27T14:30:45Z","updatedAt":"2025-10-27T14:35:45Z"}

---

### EP: DELETE /users/:userId
DESC: Delete a user account.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /users/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {}

---

## Image Conversion Endpoints

### EP: POST /conversions
DESC: Create a new image-to-PDF conversion job.
IN: headers:{Authorization:str!}, body:{settings:obj{pageSize:str, orientation:str, quality:str, margin:int, imagesPerPage:int, fitToPage:bool, maintainAspectRatio:bool, customWidth:int?, customHeight:int?}}
OUT: 201:{id:str, status:str, createdAt:str, uploadUrls:arr[obj{imageId:str, uploadUrl:str}]}
ERR: {"400":"Invalid conversion settings", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /conversions -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"settings":{"pageSize":"a4","orientation":"portrait","quality":"high","margin":20,"imagesPerPage":1,"fitToPage":true,"maintainAspectRatio":true}}'
EX_RES_201: {"id":"cltx1234567890","status":"idle","createdAt":"2025-10-27T14:30:45Z","uploadUrls":[]}

---

### EP: POST /conversions/:conversionId/images
DESC: Upload images to a conversion job.
IN: headers:{Authorization:str!}, params:{conversionId:str!}, body:{images:arr[obj{name:str!, size:int!, mimeType:str!, width:int?, height:int?}]}
OUT: 200:{uploadUrls:arr[obj{imageId:str, uploadUrl:str, fileName:str}]}
ERR: {"400":"Invalid image data", "401":"Unauthorized", "404":"Conversion job not found", "413":"File too large", "422":"Unsupported file type", "500":"Internal server error"}
EX_REQ: curl -X POST /conversions/cltx1234567890/images -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Content-Type: application/json" -d '{"images":[{"name":"photo1.jpg","size":1024000,"mimeType":"image/jpeg","width":1920,"height":1080}]}'
EX_RES_200: {"uploadUrls":[{"imageId":"img_abc123","uploadUrl":"https://storage.example.com/upload/abc123","fileName":"photo1_abc123.jpg"}]}

---

### EP: POST /conversions/:conversionId/process
DESC: Start processing the conversion job.
IN: headers:{Authorization:str!}, params:{conversionId:str!}
OUT: 200:{id:str, status:str, progress:obj{current:int, total:int, stage:str, message:str}}
ERR: {"400":"Invalid conversion state", "401":"Unauthorized", "404":"Conversion job not found", "409":"Job already processing", "500":"Internal server error"}
EX_REQ: curl -X POST /conversions/cltx1234567890/process -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"cltx1234567890","status":"processing","progress":{"current":1,"total":4,"stage":"preparing","message":"Preparing PDF document..."}}

---

### EP: GET /conversions/:conversionId
DESC: Get conversion job status and details.
IN: headers:{Authorization:str!}, params:{conversionId:str!}
OUT: 200:{id:str, status:str, images:arr[obj{id:str, originalName:str, fileName:str, fileSize:int, mimeType:str, width:int?, height:int?}], settings:obj, createdAt:str, completedAt:str?, filename:str?, fileSize:int?, downloadUrl:str?, error:str?}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"Conversion job not found", "500":"Internal server error"}
EX_REQ: curl -X GET /conversions/cltx1234567890 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"id":"cltx1234567890","status":"complete","images":[{"id":"img_abc123","originalName":"photo1.jpg","fileName":"photo1_abc123.jpg","fileSize":1024000,"mimeType":"image/jpeg","width":1920,"height":1080}],"settings":{"pageSize":"a4","orientation":"portrait","quality":"high","margin":20,"imagesPerPage":1,"fitToPage":true,"maintainAspectRatio":true},"createdAt":"2025-10-27T14:30:45Z","completedAt":"2025-10-27T14:31:00Z","filename":"converted-images-1730036700000.pdf","fileSize":2048576,"downloadUrl":"https://storage.example.com/download/cltx1234567890.pdf"}

---

### EP: GET /conversions/:conversionId/download
DESC: Download the converted PDF file.
IN: headers:{Authorization:str!}, params:{conversionId:str!}
OUT: 200:{[PDF file stream]}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"Conversion job or file not found", "409":"Conversion not completed", "500":"Internal server error"}
EX_REQ: curl -X GET /conversions/cltx1234567890/download -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: [Binary PDF content]

---

### EP: DELETE /conversions/:conversionId
DESC: Delete a conversion job and associated files.
IN: headers:{Authorization:str!}, params:{conversionId:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"Conversion job not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /conversions/cltx1234567890 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_204: {}

---

### EP: GET /conversions
DESC: Get user's conversion history with pagination.
IN: headers:{Authorization:str!}, query:{status:str?, sortBy:str?, limit:int?, page:int?}
OUT: 200:{results:arr[obj{id:str, status:str, createdAt:str, completedAt:str?, filename:str?, fileSize:int?, error:str?}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET "/conversions?page=1&limit=10&status=complete" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"results":[{"id":"cltx1234567890","status":"complete","createdAt":"2025-10-27T14:30:45Z","completedAt":"2025-10-27T14:31:00Z","filename":"converted-images-1730036700000.pdf","fileSize":2048576}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

### EP: GET /conversions/:conversionId/progress
DESC: Get real-time conversion progress via Server-Sent Events.
IN: headers:{Authorization:str!}, params:{conversionId:str!}
OUT: 200:{[SSE stream with progress updates]}
ERR: {"401":"Unauthorized", "403":"Forbidden", "404":"Conversion job not found", "500":"Internal server error"}
EX_REQ: curl -X GET /conversions/cltx1234567890/progress -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." -H "Accept: text/event-stream"
EX_RES_200: data: {"current":2,"total":4,"stage":"processing","message":"Processing images..."}\n\n

---

## Conversion Statistics Endpoints

### EP: GET /statistics/conversions
DESC: Get user's conversion statistics.
IN: headers:{Authorization:str!}, query:{period:str?}
OUT: 200:{totalJobs:int, successJobs:int, failedJobs:int, totalFilesProcessed:int, totalSizeMB:float, averageProcessingTime:int, lastJobDate:str?}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET "/statistics/conversions?period=month" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
EX_RES_200: {"totalJobs":25,"successJobs":23,"failedJobs":2,"totalFilesProcessed":150,"totalSizeMB":125.8,"averageProcessingTime":15,"lastJobDate":"2025-10-27T14:31:00Z"}

---

## MCP (Model Context Protocol) Endpoints

### EP: POST /mcp
DESC: Handle MCP requests for AI model integration.
IN: headers:{Authorization:str!}, body:{method:str!, params:obj?}
OUT: 200:{result:obj?, error:obj?}
ERR: {"400":"Invalid MCP request", "401":"Unauthorized MCP access", "500":"Internal server error"}
EX_REQ: curl -X POST /mcp -H "Authorization: Bearer mcp_token_123" -H "Content-Type: application/json" -d '{"method":"tools/list","params":{}}'
EX_RES_200: {"result":{"tools":[{"name":"user_management","description":"Manage users in the system"}]}}

---

### EP: GET /mcp
DESC: Get MCP server capabilities and status.
IN: headers:{Authorization:str!}
OUT: 200:{capabilities:obj{tools:arr[str], resources:arr[str]}, version:str, status:str}
ERR: {"401":"Unauthorized MCP access", "500":"Internal server error"}
EX_REQ: curl -X GET /mcp -H "Authorization: Bearer mcp_token_123"
EX_RES_200: {"capabilities":{"tools":["user_management","conversion_history"],"resources":["users","conversions"]},"version":"1.0.0","status":"active"}

---

### EP: DELETE /mcp
DESC: Cleanup MCP resources or sessions.
IN: headers:{Authorization:str!}, body:{sessionId:str?}
OUT: 204:{}
ERR: {"401":"Unauthorized MCP access", "404":"Session not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /mcp -H "Authorization: Bearer mcp_token_123" -H "Content-Type: application/json" -d '{"sessionId":"session_abc123"}'
EX_RES_204: {}