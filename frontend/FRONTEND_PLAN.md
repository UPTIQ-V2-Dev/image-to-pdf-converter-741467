# Image to PDF Converter - Technical Implementation Plan

## Project Overview

React 19 + Vite + Shadcn/UI + Tailwind v4 application for converting images to PDF with drag-and-drop interface, preview functionality, and customizable PDF settings.

## Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **UI Framework**: Shadcn/UI components
- **Styling**: Tailwind CSS v4
- **PDF Generation**: jsPDF, PDF-lib
- **Image Processing**: Canvas API, File API
- **State Management**: React hooks, TanStack Query
- **Form Handling**: React Hook Form + Zod validation

## Page-by-Page Implementation Plan

### 1. Authentication Pages

#### Login Page (`/login`)

**File**: `src/pages/LoginPage.tsx`

**Components**:

- `LoginForm` - Email/password form with validation
- `AuthLayout` - Shared layout for auth pages

**Features**:

- Email/password authentication
- Form validation with React Hook Form + Zod
- Remember me functionality
- Redirect to main app after successful login
- Mock data support via VITE_USE_MOCK_DATA

**Integration**:

- Uses existing auth service (`src/services/auth.ts`)
- Integrates with existing token management (`src/lib/api.ts`)
- Handles authentication state and redirects

### 2. Main Converter Page (`/`)

**File**: `src/pages/ConverterPage.tsx`

**Components**:

- `ImageUploader` - Drag & drop zone with file validation
- `ImagePreview` - Display uploaded images with reorder/delete
- `ConversionSettings` - PDF settings panel (page size, orientation, quality)
- `ConvertButton` - Trigger PDF generation and download
- `ProgressIndicator` - Show conversion progress

**Utils**:

- `src/utils/imageValidation.ts` - Validate file types, sizes
- `src/utils/pdfGenerator.ts` - Core PDF creation logic
- `src/utils/imageProcessor.ts` - Resize, compress images
- `src/utils/fileUtils.ts` - File handling utilities

**Types**:

- `src/types/image.ts` - Image file interfaces
- `src/types/pdf.ts` - PDF settings interfaces
- `src/types/conversion.ts` - Conversion state types

**Hooks**:

- `src/hooks/useImageUpload.ts` - Handle file uploads
- `src/hooks/usePdfConversion.ts` - Manage conversion process
- `src/hooks/useImagePreview.ts` - Image preview state

### 2. Settings/Configuration Page (`/settings`)

**File**: `src/pages/SettingsPage.tsx`

**Components**:

- `DefaultSettings` - Set default PDF preferences
- `QualitySettings` - Image compression options
- `PageLayoutSettings` - Default page layouts
- `ExportPresets` - Save/load conversion presets

**Utils**:

- `src/utils/settingsStorage.ts` - Local storage management
- `src/utils/presetManager.ts` - Manage user presets

### 3. History/Downloads Page (`/history`)

**File**: `src/pages/HistoryPage.tsx`

**Components**:

- `ConversionHistory` - List previous conversions
- `DownloadManager` - Re-download PDFs
- `HistoryFilters` - Filter by date, size, etc.

**Utils**:

- `src/utils/historyManager.ts` - Manage conversion history
- `src/utils/downloadManager.ts` - Handle file downloads

## Shared Components & Layout

### Layout Components

- `src/components/layout/AppLayout.tsx` - Main app wrapper
- `src/components/layout/Header.tsx` - App header with navigation
- `src/components/layout/Footer.tsx` - Footer with links/info

### Shared Components

- `src/components/shared/FileDropzone.tsx` - Reusable file drop area
- `src/components/shared/ImageThumbnail.tsx` - Image preview component
- `src/components/shared/LoadingSpinner.tsx` - Loading indicators
- `src/components/shared/ErrorBoundary.tsx` - Error handling
- `src/components/shared/Toast.tsx` - Success/error notifications

### Form Components

- `src/components/forms/PdfSettingsForm.tsx` - PDF configuration form
- `src/components/forms/ImageUploadForm.tsx` - Upload form with validation

## Core Services & APIs

### Services

- `src/services/pdfService.ts` - PDF generation service
- `src/services/imageService.ts` - Image processing service
- `src/services/storageService.ts` - Browser storage management
- `src/services/downloadService.ts` - File download handling

### API Integration (if backend needed)

- `src/api/conversionApi.ts` - API endpoints for server-side conversion
- `src/api/uploadApi.ts` - File upload endpoints

## Utility Functions

### Image Processing

- `src/utils/imageResize.ts` - Resize images for PDF
- `src/utils/imageCompress.ts` - Compress images
- `src/utils/imageCrop.ts` - Crop/rotate images
- `src/utils/imageMetadata.ts` - Extract EXIF data

### PDF Generation

- `src/utils/pdfLayout.ts` - Calculate page layouts
- `src/utils/pdfSettings.ts` - PDF configuration logic
- `src/utils/pdfOptimizer.ts` - Optimize PDF size

### General Utils

- `src/utils/fileConverter.ts` - File format conversions
- `src/utils/dragAndDrop.ts` - Drag & drop handlers
- `src/utils/validation.ts` - Form/file validation
- `src/utils/formatters.ts` - Format file sizes, dates

## State Management

### Context Providers

- `src/contexts/AppContext.tsx` - Global app state
- `src/contexts/ConversionContext.tsx` - Conversion process state
- `src/contexts/SettingsContext.tsx` - User preferences

### Custom Hooks

- `src/hooks/useLocalStorage.ts` - Persistent storage
- `src/hooks/useFileValidation.ts` - File validation
- `src/hooks/useImageSort.ts` - Reorder images
- `src/hooks/usePdfPreview.ts` - PDF preview generation

## Additional Features

### Advanced Components

- `src/components/advanced/BatchProcessor.tsx` - Process multiple sets
- `src/components/advanced/PreviewModal.tsx` - PDF preview modal
- `src/components/advanced/ProgressTracker.tsx` - Detailed progress
- `src/components/advanced/ImageEditor.tsx` - Basic image editing

### Styling & Themes

- Extend existing Tailwind themes for conversion-specific styles
- Custom CSS for drag-and-drop animations
- PDF preview styling

## Dependencies to Add

```json
{
    "jspdf": "^2.5.1",
    "pdf-lib": "^1.17.1",
    "react-dropzone": "^14.2.3",
    "react-sortable-hoc": "^2.0.0",
    "file-saver": "^2.0.5"
}
```

## Implementation Phases

1. **Phase 1**: Core image upload and basic PDF generation
2. **Phase 2**: Advanced settings and image manipulation
3. **Phase 3**: History, presets, and optimization features
4. **Phase 4**: Polish, animations, and performance optimization

## Testing Strategy

- Unit tests for utils and services
- Component tests for UI interactions
- E2E tests for conversion workflow
- Performance tests for large file handling
