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
        withCredentials([string(credentialsId: 'GitHub-PAT', variable: 'GITHUB_TOKEN')]){
          nodejs('node-latest') {
            sh '''
            npx gh-pages -b master -d build -u $GITHUB_TOKEN
            '''
          }
        }
      }
    }
  }
}
