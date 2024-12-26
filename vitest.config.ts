import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['junit', 'html'],
    // outputFile: {
    //     junit: './html/junit-report.xml'
    //   }
  }
})

