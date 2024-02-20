package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;
import com.demo.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	private UserService service;
   @GetMapping("/")
	public  ResponseEntity<List<User>> getUsers(){
	   
	 List<User> ulist=service.getAllUser();
	 System.out.println(ulist);
	 return ResponseEntity.ok(ulist);
	 
   }
   
   @PostMapping("/login")
   public ResponseEntity<?> login(@RequestBody User user ){
	   
	   User user1=service.findByUsernamePassword(user.getUsername(),user.getPassword());
	   if(user1!=null) {
		 
		  return ResponseEntity.ok(user1);
	   }
	   return ResponseEntity.noContent().build();
   }
   @PostMapping("/register")
   public ResponseEntity<?> register(@RequestBody User user){
	   User user1=service.findByUsername(user.getUsername());
	   System.out.println(user);
	   if(user1==null) {
		     User user2=service.add(user);
			   if(user2!=null) {
				  
				  return ResponseEntity.ok(user2);
			   }
	   }
	   
	   return ResponseEntity.noContent().build();
   }
   @PostMapping("/reset")
   public ResponseEntity<User> resetpass(@RequestBody User user){
	   System.out.println(user);
	        User user1=service.checkUser(user.getUsername(),user.getEmail());
	        System.out.println(user1);
	   if(user1!=null) {
		   System.out.println(user.getPassword());
		   int update=service.updatePassword(user.getPassword(),user1.getUid());
		   if(update>0) {
			   System.out.println(user1);
			   return ResponseEntity.ok(user1);
		   }
		
	   }
	   return ResponseEntity.noContent().build();
   }
   
   @PostMapping("/check")
   public ResponseEntity<?> checkPass(@RequestBody User user ){
	   
	   User user1=service.findByPassword(user.getPassword());
	   System.out.println(user);
	   if(user1!=null) {
		 
		  return ResponseEntity.ok(user1);
	   }
	   return ResponseEntity.noContent().build();
   }
   @PostMapping("/change")
   public ResponseEntity<?> changePass(@RequestBody User user ){
	   System.out.println(user);
	   int update=service.updatePassword(user.getPassword(),user.getUid());
	   if(update>0) {
		 
		  return ResponseEntity.ok(update);
	   }
	   return ResponseEntity.noContent().build();
   }
   @GetMapping("/userDetail")
	public  ResponseEntity<List<Object>> getUsersDeta(){
	   
	 List<Object> ulist=service.getAllUserOrder();
	
	 return ResponseEntity.ok(ulist);
	 
   }
}
