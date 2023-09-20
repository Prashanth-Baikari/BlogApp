package com.BlogApplication.Auth.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BlogApplication.Auth.Service.AuthService;
import com.BlogApplication.Auth.Service.loginResponse;
import com.BlogApplication.Entity.User;
import com.BlogApplication.UserLogin.DAO.UserDao;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthController {
	
	@Autowired
	private AuthService authService;
		
	@PostMapping("/login")
	public loginResponse login(@RequestBody UserDao userDao) {
			
			return authService.login(userDao);
		}
	}

