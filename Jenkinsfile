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
      }
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
  }
}