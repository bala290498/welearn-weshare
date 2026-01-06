# Course Images

This folder contains course cover images displayed on the batches overview cards.

## Image Naming Convention

Place course images here with filenames matching the base course name (without batch type suffix). The same image will be used for both prime and collective batches:

- `devops.webp` or `devops.jpg` - Used for both DevOps Prime and Collective batches
- `linux.webp` or `linux.jpg` - Used for both Linux Prime and Collective batches
- `aws.webp` or `aws.jpg` - Used for both AWS Prime and Collective batches

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or 16:9 aspect ratio
- **File Size**: Optimize images to keep file sizes reasonable (under 500KB recommended)

## Fallback

If an image is not found, the system will automatically fallback to `/og-image.svg`.

## Adding New Course Images

When adding a new course:
1. Create the course markdown file in `content/courses/`
2. Add the corresponding image here with the same slug as the course ID
3. The image will automatically appear on the batches page

