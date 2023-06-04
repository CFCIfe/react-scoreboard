pipeline{
  agent any
  stages {
    stage('cleaning'){
      steps {
        nodejs('node-latest') {
          sh '''
          npm cache clean --force
          npm update
          rm -rf node_modules
          '''
        }
      }
    }
    stage('build'){
      steps {
        nodejs('node-latest') {
          sh '''
          npm ci --no-warnings
          npm install --save gh-pages --no-warnings
          '''
        }
      }
    }
    stage('deploy'){
      steps {
        nodejs('Node-10.17') {
          sh '''
          npx gh-pages -b master -d build
          '''
        }
      }
    }
  }
}
