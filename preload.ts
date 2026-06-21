import v8 from 'node:v8';

// Polyfill the missing Bun v8 snapshot method
if (v8 && v8.startupSnapshot && !v8.startupSnapshot.isBuildingSnapshot) {
  v8.startupSnapshot.isBuildingSnapshot = () => false;
}
