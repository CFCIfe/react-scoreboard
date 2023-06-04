pipeline{
  agent any
  stages {
    stage('build'){
      steps {
        nodejs('Node-10.17') {
          sh '''
          npm install
          npm install --save gh-pages
          npm audit fix --force
          npm run build
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
