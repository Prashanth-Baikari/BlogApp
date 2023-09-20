package com.BlogApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BlogApplication.Auth.Service.AuthService;
import com.BlogApplication.Entity.User;
import com.BlogApplication.Service.UserServiceImpl;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@Autowired
	private AuthService authService;
	
	@PostMapping("/signup")
	public User createUser(@RequestBody User user) {
		
		return userServiceImpl.createUser(user);
		
	}
	
	@GetMapping("/getuserid")
	public Long getIdByUserName() {
		User user=new User();
		user.setUserName(authService.getCurrentUser().get().getUsername());
		return userServiceImpl.findIdByUserName(user);
	}
}
