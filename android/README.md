# Error while installing Google Play - Android

## Console

```shell
[capacitor] ✔ Copying web assets from www to android/app/src/main/assets/public in 503.66ms
[capacitor] ✔ Creating capacitor.config.json in android/app/src/main/assets in 651.63μp
[capacitor] (node:21196) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /Users/user/Documents/GitHub/user-ionic/starter-tabs/node_modules/tslib/package.json.
[capacitor] Update this package.json to use a subpath pattern like "./*".
[capacitor] (Use `node --trace-deprecation ...` to show where the warning was created)
[capacitor] ✔ copy android in 521.84ms
[capacitor] ✔ Updating Android plugins in 4.31ms
[capacitor] [info] Found 5 Capacitor plugins for android:
[capacitor]        @capacitor/app@1.1.0
[capacitor]        @capacitor/haptics@1.1.4
[capacitor]        @capacitor/keyboard@1.2.1
[capacitor]        @capacitor/status-bar@1.0.7
[capacitor]        @ionic-enterprise/google-pay@1.0.0
[capacitor] ✔ update android in 33.39ms
[capacitor] ✖ Running Gradle build - failed!
[capacitor] [error] WARNING:: Using flatDirs should be avoided because it doesn't support any meta-data formats.
[capacitor]         Currently detected usages:
[capacitor]         - repository flatDir used in: project ':app', project ':capacitor-cordova-android-plugins'
[capacitor]         WARNING:: Please remove usages of `jcenter()` Maven repository from your build scripts and migrate your build to other Maven repositories.
[capacitor]         This repository is deprecated and it will be shut down in the future.
[capacitor]         See http://developer.android.com/r/tools/jcenter-end-of-service for more information.
[capacitor]         Currently detected usages in: root project 'android', project ':app', project ':capacitor-android', ...
[capacitor]         Warning: Mapping new ns http://schemas.android.com/repository/android/common/02 to old ns http://schemas.android.com/repository/android/common/01
[capacitor]         Warning: Mapping new ns http://schemas.android.com/repository/android/generic/02 to old ns http://schemas.android.com/repository/android/generic/01
[capacitor]         Warning: Mapping new ns http://schemas.android.com/sdk/android/repo/addon2/02 to old ns http://schemas.android.com/sdk/android/repo/addon2/01
[capacitor]         Warning: Mapping new ns http://schemas.android.com/sdk/android/repo/repository2/02 to old ns http://schemas.android.com/sdk/android/repo/repository2/01
[capacitor]         Warning: Mapping new ns http://schemas.android.com/sdk/android/repo/sys-img2/02 to old ns http://schemas.android.com/sdk/android/repo/sys-img2/01
[capacitor]         > Task :app:preBuild UP-TO-DATE
[capacitor]         > Task :app:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-android:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-android:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-android:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-app:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-app:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-app:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-cordova-android-plugins:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-haptics:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-keyboard:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-status-bar:preBuild UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:preDebugBuild UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:compileDebugAidl NO-SOURCE
[capacitor]         > Task :ionic-enterprise-google-pay:preBuild UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:preDebugBuild UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:compileDebugAidl NO-SOURCE
[capacitor]         > Task :app:compileDebugAidl NO-SOURCE
[capacitor]         > Task :capacitor-android:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-app:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-cordova-android-plugins:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-haptics:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-keyboard:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-status-bar:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :ionic-enterprise-google-pay:packageDebugRenderscript NO-SOURCE
[capacitor]         > Task :app:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :app:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :app:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :capacitor-android:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :capacitor-app:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:writeDebugAarMetadata UP-TO-DATE
[capacitor]         > Task :app:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :app:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:writeDebugAarMetadata
[capacitor]         > Task :capacitor-android:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-android:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :capacitor-android:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-android:packageDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-app:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-app:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :capacitor-app:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-app:packageDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-cordova-android-plugins:generateDebugResValues
[capacitor]         > Task :capacitor-cordova-android-plugins:generateDebugResources
[capacitor]         > Task :capacitor-cordova-android-plugins:packageDebugResources
[capacitor]         > Task :capacitor-haptics:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-haptics:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:packageDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-keyboard:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:packageDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :capacitor-status-bar:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:generateDebugResources UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:packageDebugResources UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:compileDebugRenderscript NO-SOURCE
[capacitor]         > Task :ionic-enterprise-google-pay:generateDebugResValues UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:generateDebugResources UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:packageDebugResources UP-TO-DATE
[capacitor]         > Task :app:mergeDebugResources UP-TO-DATE
[capacitor]         > Task :app:createDebugCompatibleScreenManifests UP-TO-DATE
[capacitor]         > Task :app:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-android:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-android:processDebugManifest UP-TO-DATE
[capacitor]         > Task :capacitor-app:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-app:processDebugManifest UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:extractDeepLinksDebug
[capacitor]         > Task :capacitor-haptics:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:processDebugManifest UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:processDebugManifest UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:processDebugManifest
[capacitor]         > Task :capacitor-status-bar:processDebugManifest UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:extractDeepLinksDebug UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:processDebugManifest UP-TO-DATE
[capacitor]         > Task :capacitor-android:compileDebugLibraryResources UP-TO-DATE
[capacitor]         > Task :capacitor-app:compileDebugLibraryResources UP-TO-DATE
[capacitor]         > Task :capacitor-android:parseDebugLocalResources
[capacitor]         > Task :capacitor-app:parseDebugLocalResources
[capacitor]         > Task :capacitor-cordova-android-plugins:compileDebugLibraryResources
[capacitor]         > Task :app:processDebugMainManifest
[capacitor]         > Task :app:processDebugManifest
[capacitor]         > Task :capacitor-haptics:compileDebugLibraryResources UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:parseDebugLocalResources
[capacitor]         > Task :capacitor-haptics:parseDebugLocalResources
[capacitor]         > Task :capacitor-android:generateDebugRFile
[capacitor]         > Task :app:processDebugManifestForPackage
[capacitor]         > Task :capacitor-keyboard:compileDebugLibraryResources UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:compileDebugLibraryResources UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:parseDebugLocalResources
[capacitor]         > Task :capacitor-status-bar:parseDebugLocalResources
[capacitor]         > Task :capacitor-cordova-android-plugins:generateDebugRFile
[capacitor]         > Task :capacitor-android:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:compileDebugLibraryResources
[capacitor]         > Task :capacitor-android:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :capacitor-app:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :capacitor-app:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:parseDebugLocalResources
[capacitor]         > Task :capacitor-cordova-android-plugins:generateDebugBuildConfig
[capacitor]         > Task :capacitor-cordova-android-plugins:javaPreCompileDebug
[capacitor]         > Task :capacitor-haptics:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:generateDebugBuildConfig UP-TO-DATE
[capacitor]         > Task :capacitor-status-bar:javaPreCompileDebug UP-TO-DATE
[capacitor]         > Task :ionic-enterprise-google-pay:generateDebugBuildConfig
[capacitor]         > Task :app:mergeDebugNativeDebugMetadata NO-SOURCE
[capacitor]         > Task :ionic-enterprise-google-pay:javaPreCompileDebug
[capacitor]         > Task :app:mergeDebugShaders UP-TO-DATE
[capacitor]         > Task :app:compileDebugShaders NO-SOURCE
[capacitor]         > Task :app:generateDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-android:mergeDebugShaders UP-TO-DATE
[capacitor]         > Task :capacitor-android:compileDebugShaders NO-SOURCE
[capacitor]         > Task :capacitor-android:generateDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-android:packageDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-app:mergeDebugShaders UP-TO-DATE
[capacitor]         > Task :capacitor-app:compileDebugShaders NO-SOURCE
[capacitor]         > Task :capacitor-app:generateDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-app:packageDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:mergeDebugShaders
[capacitor]         > Task :capacitor-cordova-android-plugins:compileDebugShaders NO-SOURCE
[capacitor]         > Task :capacitor-cordova-android-plugins:generateDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-cordova-android-plugins:packageDebugAssets
[capacitor]         > Task :capacitor-cordova-android-plugins:compileDebugJavaWithJavac
[capacitor]         > Task :capacitor-cordova-android-plugins:bundleLibCompileToJarDebug
[capacitor]         > Task :capacitor-app:generateDebugRFile
[capacitor]         > Task :capacitor-haptics:generateDebugRFile
[capacitor]         > Task :capacitor-keyboard:generateDebugRFile
[capacitor]         > Task :capacitor-status-bar:generateDebugRFile
[capacitor]         > Task :ionic-enterprise-google-pay:generateDebugRFile
[capacitor]         
[capacitor]         > Task :capacitor-android:compileDebugJavaWithJavac
[capacitor]         
[capacitor]         > Task :capacitor-android:bundleLibCompileToJarDebug UP-TO-DATE
[capacitor]         
[capacitor]         > Task :capacitor-haptics:compileDebugJavaWithJavac
[capacitor]         
[capacitor]         > Task :capacitor-haptics:bundleLibCompileToJarDebug UP-TO-DATE
[capacitor]         Note: Some input files use or override a deprecated API.
[capacitor]         Note: Recompile with -Xlint:deprecation for details.
[capacitor]         Note: Some input files use unchecked or unsafe operations.
[capacitor]         Note: Recompile with -Xlint:unchecked for details.
[capacitor]         Note: /Users/user/Documents/GitHub/user-ionic/starter-tabs/node_modules/@capacitor/haptics/android/src/main/java/com/capacitorjs/plugins/haptics/Haptics.java uses or overrides a deprecated API.
[capacitor]         Note: Recompile with -Xlint:deprecation for details.
[capacitor]         
[capacitor]         > Task :capacitor-status-bar:compileDebugJavaWithJavac
[capacitor]         
[capacitor]         > Task :capacitor-status-bar:bundleLibCompileToJarDebug UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:mergeDebugShaders UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:compileDebugShaders NO-SOURCE
[capacitor]         > Task :capacitor-haptics:generateDebugAssets UP-TO-DATE
[capacitor]         > Task :capacitor-haptics:packageDebugAssetsNote: /Users/user/Documents/GitHub/user-ionic/starter-tabs/node_modules/@capacitor/status-bar/android/src/main/java/com/capacitorjs/plugins/statusbar/StatusBar.java uses or overrides a deprecated API.
[capacitor]         Note: Recompile with -Xlint:deprecation for details.
[capacitor]         UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:mergeDebugShaders UP-TO-DATE
[capacitor]         > Task :capacitor-keyboard:compileDebugShaders NO-SOURCE
[capacitor]         > Task :capacitor-keyboard:generateDebugAssets UP-TO-DATE
[capacitor]         
[capacitor]         > Task :capacitor-keyboard:compileDebugJavaWithJavac
[capacitor]         Note: Some input files use or override a deprecated API.
[capacitor]         Note: Recompile with -Xlint:deprecation for details.
[capacitor]         
[capacitor]         > Task :capacitor-keyboard:bundleLibCompileToJarDebug UP-TO-DATE
[capacitor]         
[capacitor]         > Task :ionic-enterprise-google-pay:compileDebugKotlin FAILED
[capacitor]         e: /Users/user/.gradle/caches/transforms-3/990e27faa4a98d81f069ed79de199cf6/transformed/jetified-core-ktx-1.9.0-alpha02-api.jar!/META-INF/core-ktx_release.kotlin_module: Module was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.2.
[capacitor]         
[capacitor]         FAILURE: Build failed with an exception.
[capacitor]         
[capacitor]         * What went wrong:
[capacitor]         Execution failed for task ':ionic-enterprise-google-pay:compileDebugKotlin'.
[capacitor]         > Compilation error. See log for more details
[capacitor]         
[capacitor]         * Try:
[capacitor]         Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
[capacitor]         
[capacitor]         * Get more help at https://help.gradle.org
[capacitor]         
[capacitor]         BUILD FAILED in 6s
[capacitor]         
[capacitor]         Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.
[capacitor]         Use '--warning-mode all' to show the individual deprecation warnings.
[capacitor]         See https://docs.gradle.org/7.0/userguide/command_line_interface.html#sec:command_line_warnings
[capacitor]         100 actionable tasks: 37 executed, 63 up-to-date
[capacitor]         

```
