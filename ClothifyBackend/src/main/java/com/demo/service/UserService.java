package com.demo.service;

import java.util.List;

import com.demo.model.User;

public interface UserService {

	List<User> getAllUser();

	User findByUsernamePassword(String username, String password);

	User add(User user);

	User checkUser(String username, String email);

	User findByPassword(String password);

	int updatePassword(String password, int i);

	List<Object> getAllUserOrder();

	User findByUsername(String username);

}
