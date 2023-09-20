package com.BlogApplication.Auth.Service;

public class loginResponse {
	
	private String authenticationToken;
	private String username;
	private long id;
	
	public loginResponse(String authenticationToken, String username, long id) {
		super();
		this.authenticationToken = authenticationToken;
		this.username = username;
		this.id = id;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAuthenticationToken() {
		return authenticationToken;
	}

	public void setAuthenticationToken(String authenticationToken) {
		this.authenticationToken = authenticationToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
