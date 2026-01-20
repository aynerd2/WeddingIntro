# Contributing to Wedding Website Template

First off, thank you for considering contributing to this wedding website template! 🎉

This document provides guidelines for contributing to make the process smooth and effective for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 🤝 Code of Conduct

This project follows a Code of Conduct that all contributors are expected to uphold. Please be respectful, inclusive, and considerate in all interactions.

### Our Standards

- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what's best for the community
- ✅ Showing empathy towards others

## 🎯 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)
- **Code samples** if relevant

**Bug Report Template:**

```markdown
**Description:**
Brief description of the bug

**Steps to Reproduce:**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- OS: [e.g., Windows 11, macOS 13]
- Browser: [e.g., Chrome 120, Safari 17]
- Node version: [e.g., 18.17.0]

**Screenshots:**
If applicable

**Additional Context:**
Any other relevant information
```

### Suggesting Features

We love new ideas! Before suggesting features:

1. Check if it's already been suggested
2. Ensure it aligns with the project's goals
3. Consider if it's useful for most weddings

**Feature Request Template:**

```markdown
**Feature Description:**
Clear description of the feature

**Problem it Solves:**
What problem does this solve for users?

**Proposed Solution:**
How would you implement this?

**Alternatives Considered:**
What other solutions did you think about?

**Additional Context:**
Mockups, examples, etc.
```

### Improving Documentation

Documentation improvements are always welcome!

- Fix typos or unclear explanations
- Add missing documentation
- Improve examples
- Add translations
- Create tutorials or guides

### Code Contributions

We welcome code contributions! Here's what we're looking for:

**High Priority:**
- Bug fixes
- Performance improvements
- Accessibility enhancements
- Mobile responsiveness fixes
- Cross-browser compatibility

**Feature Additions:**
- RSVP functionality
- Event timeline/schedule
- Registry integration
- Guestbook/messages
- Additional payment gateways
- Multi-language support

**Nice to Have:**
- Animation improvements
- Additional design themes
- Template variations
- Testing infrastructure

## 🛠️ Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/aynerd2/WeddingIntro.git
   cd wedding-website-template
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/aynerd2/WeddingIntro.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

6. **Start development server:**
   ```bash
   npm run dev
   ```

7. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Workflow

```bash
# Keep your fork updated
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open Pull Request on GitHub
```

## 📝 Pull Request Process

### Before Submitting

- ✅ Test your changes thoroughly
- ✅ Update documentation if needed
- ✅ Follow code style guidelines
- ✅ Ensure all checks pass
- ✅ Update CHANGELOG.md (if applicable)

### PR Title Format

Use conventional commits format:

```
type(scope): description

Examples:
feat(gallery): add video support
fix(navigation): mobile menu not closing
docs(readme): update installation steps
style(hero): improve responsive layout
refactor(api): optimize image uploads
test(gallery): add unit tests
chore(deps): update dependencies
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How did you test this?

## Screenshots
If applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added (if applicable)
```

### Review Process

1. **Automated checks** must pass (linting, type-checking, build)
2. **Code review** by maintainer(s)
3. **Testing** in different environments
4. **Approval** and merge

We aim to review PRs within 48 hours.

## 🎨 Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Use functional components with hooks
- Prefer `const` over `let`, never use `var`
- Use meaningful variable names
- Add JSDoc comments for complex functions

**Example:**

```typescript
/**
 * Uploads an image to Cloudinary with optimization
 * @param file - The image file to upload
 * @returns Promise with upload result
 */
async function uploadImage(file: File): Promise<UploadResult> {
  // Implementation
}
```

### React Components

- One component per file
- Use named exports
- Props should have TypeScript interfaces
- Handle loading and error states
- Use semantic HTML

**Example:**

```typescript
interface HeroProps {
  coupleName1: string
  coupleName2: string
  weddingDate: string
}

export default function Hero({ coupleName1, coupleName2, weddingDate }: HeroProps) {
  return (
    <section className="hero">
      {/* Component content */}
    </section>
  )
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Create custom classes in `globals.css` only when necessary
- Follow mobile-first approach
- Use CSS variables for theme colors

**Example:**

```typescript
<div className="
  flex items-center justify-center
  p-4 md:p-8
  bg-deep-black text-soft-white
  rounded-sm shadow-lg
">
  Content
</div>
```

### File Naming

- Components: PascalCase (`Hero.tsx`, `Navigation.tsx`)
- Utilities: camelCase (`uploadImage.ts`, `formatDate.ts`)
- Styles: kebab-case (`globals.css`, `custom-animations.css`)
- Config: kebab-case (`next.config.js`, `tailwind.config.js`)

### Git Commits

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "fix(gallery): resolve lightbox closing issue on mobile"
git commit -m "feat(payment): add Paystack integration"

# Avoid
git commit -m "fix stuff"
git commit -m "update"
```

### Code Comments

```typescript
// Good: Explains WHY
// Using setTimeout to ensure animation completes before navigation
setTimeout(() => navigate('/'), 500)

// Bad: Explains WHAT (obvious from code)
// Set timeout to 500ms
setTimeout(() => navigate('/'), 500)
```

## 🧪 Testing

While we're working on comprehensive tests, please manually test:

### Checklist

- [ ] Desktop browsers (Chrome, Firefox, Safari)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Different screen sizes
- [ ] Dark mode (if applicable)
- [ ] Slow 3G network (throttle in DevTools)
- [ ] Image loading and optimization
- [ ] Form submissions
- [ ] Navigation flows

## 📦 Dependencies

### Adding New Dependencies

Before adding a new dependency, consider:

1. Is it necessary or can we implement it ourselves?
2. Is it actively maintained?
3. What's the bundle size impact?
4. Are there lighter alternatives?

Always add with exact version:

```bash
npm install package-name --save-exact
```

Document why you added it in the PR description.

## 🌍 Internationalization

If adding translatable content:

- Use i18n-friendly structures
- Avoid hardcoded strings
- Consider RTL languages
- Document translation keys

## ♿ Accessibility

All contributions should maintain or improve accessibility:

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA minimum)
- Test with screen readers

## 📱 Responsive Design

Test on these breakpoints:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px

## 🚀 Performance

Consider performance impact:

- Optimize images before committing
- Lazy load non-critical components
- Minimize bundle size
- Avoid blocking the main thread

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🎉 Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in the README

## ❓ Questions?

- Open a [Discussion](https://github.com/yourusername/wedding-website-template/discussions)
- Join our [Discord](#) (if available)
- Email: maintainer@example.com

## 🙏 Thank You!

Every contribution, no matter how small, makes this project better for couples around the world. Thank you for being part of this community! 💝

---

**Happy Contributing! 🎊**
