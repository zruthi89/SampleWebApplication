pipeline {
  agent any
        
  stages {
        
    stage('Build') {
      steps {
	 echo 'Build...'
         bat 'npm install'
         bat 'npm run build'
      }
    }  
           
    stage('Test') {
      steps {
	echo 'Test...'
	bat 'npm test'
      }
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
  }
}