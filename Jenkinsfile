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
	bat 'npm run test a'
      }
      post {
           success {
		script {
		  bat "exit 0"
		}
           }
           failure {
                script{
                   bat "exit 1"
                    }
                }
	}
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
  }
}