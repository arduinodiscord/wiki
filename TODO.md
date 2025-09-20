# Arduino Discord Wiki Fixes

## Issues to Fix (10 total)

### ✅ Issue 1: Homepage button text
- **File**: `vitepress/docs/src/pages/index.md`
- **Problem**: Button says "Enter" but user wants something else
- **Status**: ✅ Completed - Changed button text to "Get Started"

### ✅ Issue 2: "intrpoduction" typo
- **File**: `vitepress/docs/src/pages/gettingStarted/basicsOfProgramming.md`
- **Problem**: "intrpoduction" should be "Introduction"
- **Status**: ✅ Completed - No typo found in the file (already correct)

### ✅ Issue 3: Aggressive bold text in buyers guide
- **File**: `vitepress/docs/src/pages/gettingStarted/arduinobuyersguide.md`
- **Problem**: Text after headers is overly bold
- **Status**: ✅ Completed - Removed bold formatting from descriptive text

### ✅ Issue 4: Buyers guide table too wide
- **File**: `vitepress/docs/src/pages/gettingStarted/arduinobuyersguide.md`
- **Problem**: Table causes horizontal scrolling, needs smaller font or wider container
- **Status**: ✅ Completed - Added horizontal scroll container for table

### ✅ Issue 5: FAQ anchor links not working
- **File**: `vitepress/docs/src/pages/gettingStarted/faq.md`
- **Problem**: Anchor links not working (might be local dev issue)
- **Status**: ✅ Completed - Fixed anchor links to match heading IDs

### ✅ Issue 6: Millis vs delay page title mismatch
- **File**: `vitepress/docs/src/pages/codeGuides/millisVsDelay.md`
- **Problem**: Navigation says "Millis vs delay" but title is "Timers and Counters"
- **Status**: ✅ Completed - Changed title to "Millis vs Delay"

### ✅ Issue 7: Breadboard page images not loading
- **File**: `vitepress/docs/src/pages/hardwareGuides/breadBoard.md`
- **Problem**: Images not loading (might be path issue)
- **Status**: ✅ Completed - Fixed image paths from relative to absolute paths

### ✅ Issue 8: LED resistors page navigation mismatch
- **File**: `vitepress/docs/src/pages/hardwareGuides/ledResistors.md`
- **Problem**: Navigation says "Resistors" but header says "Proper way to use an LED"
- **Status**: ✅ Completed - Changed title to "Resistors"

### ✅ Issue 9: LED resistors page images not loading
- **File**: `vitepress/docs/src/pages/hardwareGuides/ledResistors.md`
- **Problem**: Images not loading
- **Status**: ✅ Completed - Fixed image paths from relative to absolute paths

### ✅ Issue 10: Maker boards table too wide
- **File**: `vitepress/docs/src/pages/hardwareGuides/makerboards.md`
- **Problem**: Table causes horizontal scrolling
- **Status**: ✅ Completed - Added horizontal scroll container for table

## Commit Strategy
- Each issue will be fixed in a separate commit
- Commit messages will clearly describe what was fixed
- After all fixes, create a PR to merge back to main
