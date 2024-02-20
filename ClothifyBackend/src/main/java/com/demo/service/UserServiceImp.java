package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;

@Service
public class UserServiceImp implements UserService{
    
	@Autowired
	private UserDao dao;

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public User findByUsernamePassword(String username, String password) {
		// TODO Auto-generated method stub
		return dao.findByUsername(username,password);
	}

	@Override
	public User add(User user) {
		return dao.save(user);
		
	}

	@Override
	public User checkUser(String username, String email) {
		// TODO Auto-generated method stub
		return dao.check(username,email);
	}

	@Override
	public User findByPassword(String password) {
		// TODO Auto-generated method stub
		return dao.fetchByPass(password);
	}

	@Override
	public int updatePassword(String password,int i) {
		// TODO Auto-generated method stub
		return dao.updatePass(password,i);
	}

	@Override
	public List<Object> getAllUserOrder() {
		// TODO Auto-generated method stub
		return dao.getOrders();
	}

	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return dao.getUser(username);
	}
	
	
}
