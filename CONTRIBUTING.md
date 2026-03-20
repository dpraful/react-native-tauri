# Contributing to React Native + Tauri

Thank you for your interest in contributing to react-native-tauri! We welcome contributions from everyone.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Setup](#development-setup)
4. [Making Changes](#making-changes)
5. [Submitting Changes](#submitting-changes)
6. [Reporting Bugs](#reporting-bugs)
7. [Feature Requests](#feature-requests)
8. [Contact](#contact)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and professional in all interactions.

### Our Pledge

- We are inclusive of all people
- We treat everyone with respect
- We create a harassment-free environment
- We welcome diverse perspectives

---

## Getting Started

### Prerequisites

Before you start, ensure you have:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **Rust** latest stable version
- **Git** installed and configured
- Familiarity with React and TypeScript

### Fork and Clone

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/react-native-tauri.git
cd react-native-tauri

# 3. Add upstream remote
git remote add upstream https://github.com/dpraful/react-native-tauri.git

# 4. Create a new branch
git checkout -b feature/your-feature-name
```

---

## Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Rust Toolchain

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 3. Install Platform-Specific Dependencies

**Windows:**
- Install Visual Studio with C++ development tools

**macOS:**
```bash
xcode-select --install
```

**Linux:**
```bash
sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget file libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
```

### 4. Start Development

```bash
# Web development
npm run dev

# Desktop development
npm run tauri
```

---

## Making Changes

### Project Structure

```
react-native-tauri/
├── src/                  # Frontend source code
├── src-tauri/           # Rust backend
├── templates/           # Configuration templates
├── vite.config.ts       # Vite configuration
├── index.html           # HTML entry point
├── index.js             # Main entry point
├── package.json         # Dependencies
└── README.md            # Documentation
```

### Code Style

We follow these conventions:

- **JavaScript/TypeScript**: Use modern ES6+ syntax
- **Formatting**: 2-space indentation
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Comments**: Use JSDoc style for functions

```typescript
/**
 * Fetches user data from API
 * @param userId - The user ID to fetch
 * @returns Promise resolving to user data
 */
async function getUser(userId: string): Promise<User> {
  // Implementation
}
```

### Commit Messages

Use clear, descriptive commit messages following the pattern:

```
<type>: <description>

<optional body>
<optional footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/changes
- `chore:` Dependency or tooling changes

**Example:**
```
feat: Add experimental dark mode support

Implement theme switching using React context.
Closes #123
```

### Testing

Before submitting, test your changes:

```bash
# Development build
npm run build

# Desktop build
npm run tauri:build

# Web preview
npm run preview
```

---

## Submitting Changes

### Step-by-Step Guide

1. **Update your branch:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request:**
   - Go to https://github.com/dpraful/react-native-tauri
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guide
- [ ] Commits have descriptive messages
- [ ] Changes are tested locally
- [ ] Documentation is updated
- [ ] No console errors/warnings
- [ ] Bundle size is reasonable
- [ ] Works on Windows, macOS, and Linux (if possible)

### PR Description Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation

## Testing
How was this tested?

## Screenshots
If applicable, add screenshots.

## Checklist
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
```

---

## Reporting Bugs

### Before Reporting

1. Search [existing issues](https://github.com/dpraful/react-native-tauri/issues)
2. Update npm packages: `npm update`
3. Clear cache: `npm cache clean --force`
4. Reinstall: `npm install`

### Report Format

Provide the following information:

**Title:** Clear, descriptive title

**Description:**
- What you expected to happen
- What actually happened
- When the bug occurs

**Reproduction Steps:**
```
1. Step one
2. Step two
3. Step three
```

**Environment:**
```
- OS: Windows/macOS/Linux
- Node version: 
- npm version:
- Rust version:
- Package version:
```

**Code Example:**
```typescript
// If possible, provide a minimal code example
```

**Error Output:**
```
Full error message and stack trace
```

---

## Feature Requests

### Before Requesting

1. Check [existing issues](https://github.com/dpraful/react-native-tauri/issues)
2. Discuss in existing threads
3. Ensure it aligns with project goals

### Feature Request Format

**Title:** Clear description of feature

**Problem:**
What problem does this solve?

**Proposed Solution:**
How would you implement this?

**Alternative Solutions:**
Any alternatives you considered?

**Additional Context:**
Any other relevant information?

---

## Approval Process

1. **Review:** Maintainers review PR for quality and alignment
2. **Feedback:** Changes may be requested
3. **Approval:** PR is approved when it meets standards
4. **Merge:** PR is merged to main branch
5. **Release:** Changes included in next version

## Common Issues & Solutions

### "Rust not found"
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### "WebKit not found" (Linux)
```bash
sudo apt install libwebkit2gtk-4.0-dev
```

### "Port already in use"
```bash
# Change port in vite.config.ts
server: {
  port: 3001,  // Use different port
}
```

### Build fails
```bash
# Clean and rebuild
rm -rf node_modules dist src-tauri/target
npm install
npm run build
```

---

## Documentation

When adding features:

1. Update README.md with examples
2. Add JSDoc comments to code
3. Update CHANGELOG.md
4. Create/update relevant sections

---

## Review Criteria

PRs are evaluated on:

- **Code Quality:** Clean, maintainable code
- **Testing:** Proper test coverage
- **Documentation:** Clear documentation
- **Performance:** No regressions
- **Compatibility:** Works across platforms
- **Security:** No security vulnerabilities

---

## Questions?

- **Issues:** Use [GitHub Issues](https://github.com/dpraful/react-native-tauri/issues)
- **Discussions:** Use [GitHub Discussions](https://github.com/dpraful/react-native-tauri/discussions)
- **Email:** Contact via author profile

---

## Recognition

Contributors will be recognized in:
- CHANGELOG.md
- PR merge
- Release notes

---

## Additional Resources

- [Git Basics](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com)
- [Tauri Documentation](https://tauri.app)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

Thank you for contributing! 🎉

**Happy coding!**
