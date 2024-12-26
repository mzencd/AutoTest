import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'html']
    // outputFile: {
    //     junit: './html/junit-report.xml'
    //   }
  }
})