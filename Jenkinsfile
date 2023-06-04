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
          npm ci
          npm install --save gh-pages
          '''
        }
      }
    }
    stage('deploy'){
      steps {
        nodejs('Node-10.17') {
          sh '''
          gh-pages -b master -d build
          '''
        }
      }
    }
  }
}
