# Content Management Guide

This directory contains all markdown-based content for the WeLearnWeShare platform. Admins can manage courses, talents, groups, and blogs by editing markdown files.

## Directory Structure

```
content/
├── courses/          # Course content
│   ├── _template.md  # Template for new courses
│   ├── devops.md
│   ├── linux.md
│   └── aws.md
├── talents/          # Talent profiles
│   ├── _template.md  # Template for new talents
│   ├── talent-1.md
│   ├── talent-2.md
│   └── ...
├── groups/           # Community groups
│   ├── _template.md  # Template for new groups
│   ├── it-devops.md
│   ├── it-linux.md
│   └── ...
└── blogs/            # Blog posts
    ├── _template.md  # Template for new blog posts
    ├── getting-started-with-devops.md
    ├── linux-command-line-basics.md
    └── ...
```

## How to Add New Content

### Adding a New Course

1. Copy `courses/_template.md` to `courses/your-course-id.md`
2. Fill in the frontmatter (metadata between `---` lines)
3. Add course content sections (Syllabus, Features, Prerequisites)
4. Save the file - it will automatically appear on the website

### Adding a New Talent

1. Copy `talents/_template.md` to `talents/talent-X.md`
2. Fill in the frontmatter with talent information
3. Add portfolio, achievements, and competitions sections
4. Save the file - it will automatically appear on the talent showcase

### Adding a New Group

1. Copy `groups/_template.md` to `groups/your-group-id.md`
2. Fill in the frontmatter with group information
3. Add topics list
4. Save the file - it will automatically appear on the groups page

### Adding a New Blog Post

1. Copy `blogs/_template.md` to `blogs/your-blog-slug.md`
2. Fill in the frontmatter with blog information
3. Write your blog content using markdown
4. Save the file - it will automatically appear on the blogs page

## Frontmatter Fields

### Course Frontmatter
- `id`: Unique identifier (used in URL)
- `title`: Course title
- `category`: Course category (e.g., DevOps, Linux, Cloud)
- `description`: Brief description (1-2 sentences)
- `duration`: Course duration (e.g., "12 weeks")
- `level`: Skill level (Beginner/Intermediate/Advanced)
- `instructor`: Instructor name
- `price`: Price range (e.g., "₹8,000 - ₹5,000")
- `contactEmail`: Contact email
- `contactPhone`: Contact phone (include country code)

### Talent Frontmatter
- `id`: Unique identifier (used in URL)
- `name`: Full name
- `category`: Skill category (DevOps/Linux/AWS)
- `skillLevel`: Skill level (Beginner/Intermediate/Advanced/Expert)
- `photo`: Photo URL or placeholder
- `contactEmail`: Contact email
- `contactPhone`: Contact phone
- `linkedin`: LinkedIn URL (optional)
- `github`: GitHub URL (optional)
- `website`: Personal website URL (optional)
- `twitter`: Twitter URL (optional)

### Group Frontmatter
- `id`: Unique identifier
- `name`: Community name
- `category`: Category (IT/HR/Other)
- `icon`: Emoji icon
- `description`: Brief description (1-2 sentences)
- `memberCount`: Number of members
- `communityHead`: Name of community head
- `whatsappUrl`: WhatsApp group invite URL

### Blog Frontmatter
- `id`: Unique identifier (used in URL)
- `title`: Blog post title
- `author`: Author name
- `date`: Publication date (YYYY-MM-DD format)
- `category`: Blog category (e.g., DevOps, Linux, AWS, Technology)
- `description`: Brief description (1-2 sentences, used for preview)
- `image`: Featured image URL (optional, from Unsplash or other sources)
- `tags`: Array of tags (optional)

## Content Sections

### Course Sections
Use markdown headings `##` for sections:
- `## Course Syllabus` - Numbered list (1., 2., 3.)
- `## Course Features` - Bullet list (-)
- `## Prerequisites` - Bullet list (-)

### Talent Sections
- `## Portfolio` - Bullet list of achievements/projects
- `## Achievements` - Bullet list of awards
- `## Competitions & Challenges` - Numbered list of competitions

### Group Sections
- `## Topics` - Bullet list of discussion topics

### Blog Sections
Blogs use standard markdown formatting:
- Use `## Heading` for main sections
- Use `### Subheading` for subsections
- Use `- Item` for bullet lists
- Use `**bold**` and `*italic*` for emphasis
- Use `[link text](url)` for links

## Markdown Formatting

- Use `## Heading` for section headings
- Use `- Item` for bullet lists
- Use `1. Item` for numbered lists
- Keep content concise and scannable

## Notes

- Files starting with `_` (like `_template.md`) are ignored and won't appear on the website
- Always use unique IDs for new content
- Phone numbers should include country code (e.g., "+91-XXXXXXXXXX")
- WhatsApp URLs should be full invite links

