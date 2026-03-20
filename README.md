# React Native + Tauri Setup Guide

> A modern JavaScript/TypeScript module that integrates React Native with Tauri for building cross-platform desktop applications. Build **once**, deploy everywhere - Web, Windows, macOS, and Linux.

[![npm version](https://badge.fury.io/js/react-native-tauri.svg)](https://www.npmjs.com/package/react-native-tauri)
[![License](https://img.shields.io/badge/license-JESCON%20TECHNOLOGIES-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/dpraful/react-native-tauri)](https://github.com/dpraful/react-native-tauri/issues)
[![GitHub stars](https://img.shields.io/github/stars/dpraful/react-native-tauri)](https://github.com/dpraful/react-native-tauri)

---

## 🌍 What You Can Build

With this setup, you can build your app for:

- 🌐 **Web (Browser)** - Deploy on any web hosting
- 🪟 **Windows Desktop (.exe / .msi)** - Native Windows application
- 🍎 **macOS (.app / .dmg)** - Native macOS application
- 🐧 **Linux (.AppImage / .deb / .rpm)** - Native Linux application

👉 **One codebase → Multiple platforms**

---

## ✨ Features

- 🚀 **Built with Vite** - Lightning-fast development with Hot Module Replacement (HMR)
- ⚛️ **React & React Native Web** - Write once, use everywhere
- 🔗 **Seamless Tauri Integration** - Access native APIs from JavaScript
- 🎯 **Full TypeScript Support** - Type-safe development
- 📦 **Optimized Production Builds** - Small bundle sizes
- 🔒 **Secure** - Rust backend with secure IPC
- ⚡ **Lightweight** - No Chromium overhead, uses system WebView
- 🧙 **Hot Reload** - See changes instantly during development

---

## 📋 Requirements

### System Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Rust**: Latest stable version (required for Tauri)

### Platform-Specific Requirements

#### 🪟 Windows
- Visual Studio installer with **Desktop development with C++** workload
- Windows 7 or later

#### 🍎 macOS
- Xcode Command Line Tools
- macOS 10.13 or later

#### 🐧 Linux
Debian-based systems:
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
                 build-essential \
                 curl \
                 wget \
                 file \
                 libssl-dev \
                 libgtk-3-dev \
                 libayatana-appindicator3-dev \
                 librsvg2-dev
```

Red Hat-based systems:
```bash
sudo dnf install webkit2-gtk3-devel \
                build-essential \
                curl \
                wget \
                file \
                openssl-devel \
                gtk3-devel
```

---

## 📦 Installation

### Step 1: Install Rust (Required)

Visit [https://rust-lang.org/tools/install/](https://rust-lang.org/tools/install/) and follow the installation instructions.

Verify the installation:
```bash
rustc -V
cargo -V
```

### Step 2: Install Platform Dependencies

Follow the platform-specific requirements above for your operating system.

### Step 3: Install the Package

```bash
npm install react-native-tauri
```

### Step 4: Install Runtime Dependencies

```bash
npm install @tauri-apps/api react-native-web
```

### Step 5: Install Development Dependencies

```bash
npm install -D @tauri-apps/cli vite @vitejs/plugin-react typescript
```

---

## 🚀 Quick Start

### Initialize Your Project

```bash
npx tauri init
```

This command will:
- Create the `src-tauri/` directory with Rust backend code
- Generate `tauri.conf.json` with default configuration
- Set up the Tauri application structure

### Configure Tauri

Open `src-tauri/tauri.conf.json` and update the commands:

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devUrl": "http://localhost:3000"
  }
}
```

### Update package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "tauri": "tauri dev",
    "tauri:build": "tauri build",
    "web": "npm run dev"
  }
}
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│       React Native Components            │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│     react-native-web Bridge             │
│  (Converts RN → Web Components)          │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│      Vite Build Tool & HMR              │
│  (Fast builds & hot reloading)           │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
    ┌────▼────┐          ┌────▼────┐
    │   Web   │          │  Tauri  │
    │ Browser │          │ Desktop │
    │         │          │  Apps   │
    └─────────┘          └─────────┘
```

---

## 💻 Development Workflow

### Run Web App (Fastest for Development)

```bash
npm run dev
```

- Opens on `http://localhost:3000`
- Hot reload on file changes
- Use for rapid iteration

### Run Desktop App

```bash
npm run tauri
```

- Launches native desktop window
- Full Tauri API access
- Browser DevTools available

### Preview Production Build

```bash
npm run preview
```

- Tests the optimized build locally
- Verify bundle size and performance

---

## 🏗️ Build for Production

### Build Web Version

```bash
npm run build
```

Output location: `dist/`

This creates:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Source maps (if configured)

### Build Desktop Applications

```bash
npm run tauri:build
```

This generates platform-specific installers:
- **🪟 Windows**: `.exe` (installer) and `.msi` (Microsoft installer)
- **🍎 macOS**: `.app` (application bundle) and `.dmg` (disk image)
- **🐧 Linux**: `.AppImage`, `.deb`, and `.rpm`

Located in: `src-tauri/target/release/bundle/`

---

## 📝 Project Structure

```
react-native-tauri/
├── src/                          # Frontend source code
│   ├── App.tsx                   # Main React app
│   ├── index.tsx                 # React entry point
│   └── empty.js                  # Polyfill for unavailable modules
├── src-tauri/                    # Tauri backend (Rust)
│   ├── src/
│   │   └── main.rs               # Rust entry point
│   ├── tauri.conf.json           # Tauri configuration
│   └── Cargo.toml                # Rust dependencies
├── templates/
│   └── tauri.conf.json           # Template configuration
├── index.html                    # HTML entry point
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # npm dependencies
```

---

## 🔧 Configuration

### Vite Configuration (vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
})
```

### Tauri Configuration (src-tauri/tauri.conf.json)

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devUrl": "http://localhost:3000"
  },
  "app": {
    "windows": [{
      "title": "My App",
      "width": 1024,
      "height": 768,
      "resizable": true,
      "fullscreen": false
    }]
  }
}
```

---

## 💻 Usage Examples

### Basic React App

```typescript
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  count: {
    fontSize: 48,
    marginBottom: 16,
  },
})
```

### Using Tauri Commands

```typescript
import { invoke } from '@tauri-apps/api/tauri'

async function callRustCommand() {
  try {
    const result = await invoke('greet', { name: 'User' })
    console.log('Response:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### Accessing System APIs

```typescript
import { writeFile, readFile } from '@tauri-apps/api/fs'
import { open } from '@tauri-apps/api/dialog'

async function saveFile() {
  const filePath = await open()
  if (filePath) {
    await writeFile({ path: filePath, contents: 'Hello Tauri' })
  }
}
```

---

## ⚠️ Important Notes & Troubleshooting

### Common Issues

#### Issue: "Rust not found"
**Solution**: Ensure Rust is installed and in your PATH
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Issue: "WebKit not found" (Linux)
**Solution**: Install WebKit development libraries
```bash
sudo apt install libwebkit2gtk-4.0-dev
```

#### Issue: "Build fails on Windows"
**Solution**: Install Visual Studio with C++ development tools
- Download Visual Studio Installer
- Select "Desktop development with C++"

#### Issue: Module not found errors
**Solution**: Check that all node_modules are installed
```bash
npm install
npm install @tauri-apps/api react-native-web
```

### Known Limitations

- ✋ Some React Native modules may not work in desktop (check community packages)
- ✋ Mobile-specific APIs are not available in web/desktop
- ✋ File system operations require Tauri API permissions
- ✋ Some UI libraries may need react-native-web compatibility

### Best Practices

1. **Use react-native-web components** instead of web-specific libraries
2. **Test on target platforms** early in development
3. **Keep Tauri commands simple** - move complex logic to Rust
4. **Use proper TypeScript types** for Tauri commands
5. **Handle errors gracefully** in production builds
6. **Minimize bundle size** by code-splitting large apps

---

## 📦 Dependencies

### Production Dependencies
- `react` (^18.3.1) - UI library
- `react-dom` (^18.3.1) - DOM rendering
- `react-native-web` (^0.19.0) - React Native for web
- `@tauri-apps/api` (^2.10.1) - Tauri JavaScript API

### Development Dependencies
- `vite` (^6.4.1) - Build tool and dev server
- `@vitejs/plugin-react` (^4.7.0) - React plugin for Vite
- `@tauri-apps/cli` (^2.10.1) - Tauri CLI tool
- `typescript` (^5.0.0) - Type checking

---

## 🚀 Deployment

### Deploy Web Version

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting:
   - Vercel: `vercel deploy`
   - Netlify: Drag and drop `dist/`
   - GitHub Pages: Push to `gh-pages` branch
   - Any static host: Upload `dist/` contents

### Distribute Desktop App

1. Build the application:
   ```bash
   npm run tauri:build
   ```

2. Installers are in `src-tauri/target/release/bundle/`

3. Upload to:
   - GitHub Releases
   - Your website
   - Application stores (Windows Store, App Store, etc.)

---

## 🔐 Security Best Practices

- ✅ Validate all user input in Rust backend
- ✅ Use Tauri's `scope` configuration for file access
- ✅ Don't expose sensitive data in JavaScript
- ✅ Keep Tauri and Rust dependencies updated
- ✅ Use HTTPS for API calls
- ✅ Enable Content Security Policy (CSP)

---

## 📚 Resources & Documentation

- **Tauri**: https://tauri.app/v1/docs/
- **React**: https://react.dev
- **React Native**: https://reactnative.dev
- **Vite**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or want to request a feature?

1. Check [existing issues](https://github.com/dpraful/react-native-tauri/issues)
2. [Open a new issue](https://github.com/dpraful/react-native-tauri/issues/new) with:
   - Clear description
   - Steps to reproduce
   - Expected behavior
   - System information (OS, Node version, etc.)

---

## 📄 License

This project is licensed under the **JESCON TECHNOLOGIES PVT LMT** License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**PRAFULDAS M M**
- GitHub: [@dpraful](https://github.com/dpraful)
- Website: https://github.com/dpraful

---

## 🙏 Acknowledgments

- [Tauri Team](https://tauri.app) - Amazing desktop framework
- [React Team](https://react.dev) - Excellent UI library
- [Vite Team](https://vitejs.dev) - Lightning-fast build tool
- All contributors and community members

---

## 📞 Support

For issues, questions, or suggestions:
- **GitHub Issues**: [Open an issue](https://github.com/dpraful/react-native-tauri/issues)
- **Email**: Contact the author directly
- **Discussions**: Share your experience and ask questions

---

## 🎯 Roadmap

- [ ] Examples for common use cases
- [ ] TypeScript templates
- [ ] E2E testing setup
- [ ] Component library
- [ ] CLI generator for scaffolding
- [ ] Mobile build support

---

## ⭐ Show Your Support

If this project helped you, please star it on GitHub! ⭐

```bash
# Clone and try it out
git clone https://github.com/dpraful/react-native-tauri.git
cd react-native-tauri
npm install
npm run dev
```

---

**Happy Building! 🚀**

Made with ❤️ by PRAFULDAS M M
