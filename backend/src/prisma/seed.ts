import { PrismaClient, Role } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            password: adminPassword,
            role: Role.ADMIN,
            isEmailVerified: true
        }
    });

    console.log('✅ Created admin user:', admin.email);

    // Create test user
    const userPassword = await bcrypt.hash('user123', 12);
    const testUser = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'Test User',
            password: userPassword,
            role: Role.USER,
            isEmailVerified: true
        }
    });

    console.log('✅ Created test user:', testUser.email);

    // Create sample conversion history for test user
    await prisma.conversionHistory.upsert({
        where: { userId: testUser.id },
        update: {},
        create: {
            userId: testUser.id,
            totalJobs: 3,
            successJobs: 2,
            failedJobs: 1,
            lastJobDate: new Date()
        }
    });

    console.log('✅ Created conversion history for test user');

    // Create sample conversion job
    const sampleJob = await prisma.conversionJob.upsert({
        where: { id: 'sample_job_12345' },
        update: {},
        create: {
            id: 'sample_job_12345',
            userId: testUser.id,
            status: 'complete',
            settings: {
                pageSize: 'a4',
                orientation: 'portrait',
                quality: 'high',
                margin: 20,
                imagesPerPage: 1,
                fitToPage: true,
                maintainAspectRatio: true
            },
            filename: 'sample-converted.pdf',
            fileSize: 2048576,
            downloadUrl: 'https://storage.example.com/sample-converted.pdf',
            completedAt: new Date()
        }
    });

    console.log('✅ Created sample conversion job:', sampleJob.id);

    // Create sample conversion images for the first job
    await prisma.conversionImage.upsert({
        where: { id: 'sample_image_1' },
        update: {},
        create: {
            id: 'sample_image_1',
            conversionJobId: sampleJob.id,
            originalName: 'sample-image.jpg',
            fileName: 'sample_image_1_sample-image.jpg',
            fileSize: 1024000,
            mimeType: 'image/jpeg',
            width: 1920,
            height: 1080,
            storageUrl: 'conversions/sample_job_12345/sample_image_1_sample-image.jpg'
        }
    });

    // Create additional sample jobs for better statistics
    const successJob2 = await prisma.conversionJob.upsert({
        where: { id: 'success_job_67890' },
        update: {},
        create: {
            id: 'success_job_67890',
            userId: testUser.id,
            status: 'complete',
            settings: {
                pageSize: 'a4',
                orientation: 'landscape',
                quality: 'medium',
                margin: 10,
                imagesPerPage: 2,
                fitToPage: true,
                maintainAspectRatio: true
            },
            filename: 'multiple-images.pdf',
            fileSize: 3072768,
            downloadUrl: 'https://storage.example.com/multiple-images.pdf',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            completedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 + 1000 * 30) // 30 seconds processing time
        }
    });

    // Add images for second job
    await prisma.conversionImage.upsert({
        where: { id: 'success_image_2a' },
        update: {},
        create: {
            id: 'success_image_2a',
            conversionJobId: successJob2.id,
            originalName: 'photo1.jpg',
            fileName: 'success_image_2a_photo1.jpg',
            fileSize: 800000,
            mimeType: 'image/jpeg',
            width: 1600,
            height: 1200,
            storageUrl: 'conversions/success_job_67890/success_image_2a_photo1.jpg'
        }
    });

    await prisma.conversionImage.upsert({
        where: { id: 'success_image_2b' },
        update: {},
        create: {
            id: 'success_image_2b',
            conversionJobId: successJob2.id,
            originalName: 'photo2.png',
            fileName: 'success_image_2b_photo2.png',
            fileSize: 1200000,
            mimeType: 'image/png',
            width: 2048,
            height: 1536,
            storageUrl: 'conversions/success_job_67890/success_image_2b_photo2.png'
        }
    });

    // Create a failed job
    const failedJob = await prisma.conversionJob.upsert({
        where: { id: 'failed_job_11111' },
        update: {},
        create: {
            id: 'failed_job_11111',
            userId: testUser.id,
            status: 'failed',
            settings: {
                pageSize: 'a4',
                orientation: 'portrait',
                quality: 'high',
                margin: 15,
                imagesPerPage: 1,
                fitToPage: true,
                maintainAspectRatio: true
            },
            error: 'Invalid image format',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
        }
    });

    // Add image for failed job
    await prisma.conversionImage.upsert({
        where: { id: 'failed_image_1' },
        update: {},
        create: {
            id: 'failed_image_1',
            conversionJobId: failedJob.id,
            originalName: 'corrupted.jpg',
            fileName: 'failed_image_1_corrupted.jpg',
            fileSize: 512000,
            mimeType: 'image/jpeg',
            width: 800,
            height: 600,
            storageUrl: 'conversions/failed_job_11111/failed_image_1_corrupted.jpg'
        }
    });

    console.log('✅ Created sample conversion jobs and images');
}

main()
    .catch(e => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
