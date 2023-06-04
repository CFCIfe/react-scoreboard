pipeline{
  agent any
  stages {
    stage('install'){
      steps {
        nodejs('Node-10.17') {
          sh 'npm -v'
          sh 'yarn install'
        }
      }
    }
  }
}
