# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.14] - 2025-03-20

### Added
- Comprehensive README with detailed setup guide
- Support for cross-platform builds (Windows, macOS, Linux)
- Vite configuration for fast development and optimized builds
- TypeScript support out of the box
- npm package ready for publication

### Changed
- Updated documentation for clarity and usability
- Enhanced package.json with better metadata
- Improved developer experience with better error messages

### Fixed
- Configuration issues with Tauri initialization
- Module resolution for react-native-web

## [0.0.13] - 2025-03-15

### Added
- Initial Tauri + React Native setup
- Basic Vite configuration
- Hot Module Reloading (HMR) support

### Changed
- Updated dependencies to latest stable versions

## [0.0.1] - 2025-01-01

### Added
- Initial project setup
- Basic React Native + Tauri integration
- Package.json with essential dependencies

---

## Version Guidelines

### Breaking Changes (Major - X.0.0)
- When removing features or changing core APIs
- When major dependency versions require updates
- When Tauri has breaking changes

### New Features (Minor - 0.X.0)
- Adding new utilities or exports
- Improving compatibility
- Adding new build targets

### Bug Fixes & Improvements (Patch - 0.0.X)
- Bug fixes
- Performance improvements
- Documentation updates

---

## How to Update

To stay updated with the latest version:

```bash
npm update react-native-tauri
```

Or to check for outdated packages:

```bash
npm outdated
```

---

## Upgrading from Older Versions

### From < 0.0.10

1. Update the package:
   ```bash
   npm install react-native-tauri@latest
   ```

2. Update Vite config if customized:
   ```bash
   npm install vite@latest @vitejs/plugin-react@latest
   ```

3. Update Tauri:
   ```bash
   npm install @tauri-apps/api@latest @tauri-apps/cli@latest
   ```

---

## Reporting Issues

Found a bug in a release? Please:

1. Check [GitHub Issues](https://github.com/dpraful/react-native-tauri/issues)
2. Create a new issue with:
   - Version number
   - Reproduction steps
   - Expected vs actual behavior
   - Environment details

---

## Future Roadmap

- [ ] v0.1.0: CLI tool for scaffolding
- [ ] v0.2.0: Component library
- [ ] v0.3.0: Testing utilities
- [ ] v1.0.0: Stable API release

---

Last updated: March 20, 2025
