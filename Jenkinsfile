pipeline {
  agent any
        
  stages {
        
    stage('Build') {
      steps {
	 echo 'Build...'
         bat 'npm install'
         bat 'npm start'
      }
    }  
           
    stage('Test') {
      steps {
	echo 'Test...'
      }
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
  }
}