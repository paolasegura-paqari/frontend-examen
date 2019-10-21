<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	/**
	https://github.com/kenjis/ci-phpunit-test
	https://stackoverflow.com/questions/4883333/automated-unit-testing-with-codeigniter
	https://www.cloudways.com/blog/codeigniter-unit-testing/
	https://codeigniter.com/user_guide/libraries/unit_testing.html


	json-server --watch db.json -d 2000
	
	http://localhost:3000/todos
	http://localhost:3000/todos/1
	http://localhost:3000/todos?id=2

	https://github.com/tonitim13/frontend-examen
	 */
	public function index()
	{
		$this->load->view('header');
		$this->load->view('tasks_todo');
		$this->load->view('footer');
	}
}
