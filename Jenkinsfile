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
          npm ci —ignore-warnings
          npm install --save gh-pages —ignore-warnings
          '''
        }
      }
    }
    stage('deploy'){
      steps {
          nodejs('node-latest') {
            sh '''
            echo "deployed"
            '''
          }
        }
      }
    }
  }
}
