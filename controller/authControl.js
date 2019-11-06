const express = require('express');
const routes   = require('express').Router(); 
const jwt = require('jsonwebtoken');
const userreg = require('../models/userdata')
const jwtsecret = require('../config/jwtsecret')
const maindb    = require('../models/user');
const mongoose  = require('mongoose');



module.exports = {
      registerController  : (req,res,next)=>{
            console.log("Get")
        mongoose.set('useFindAndModify', false);
        maindb.findOne({email : req.body.email},(err, user)=>{
              if (err) {                     
               console.log('error')    
              } 
              if(user){
                    console.log("user exist")
                    res.json({
                          message : 'user exist',
                          success : false

                    }) 
                    return false;    
              }else{
                    const user = new maindb(  { 
                          fname : req.body.fname,
                          lname : req.body.lname,
                          phone : req.body.phone,
                          email : req.body.email,
                          password : req.body.password
                   })
              
                   user.save((err)=>{
                         if(err){
                               res.json({
                                     err : 'err'
                               })
                         } 
                         console.log("saved succffully")
                         res.json({
                               message : "Data saved",
                               success : true     
                         })
                   })    
              }
        })
      
  
  },
   loginController :    (req, res, next)=>{ 
                        mongoose.set('useFindAndModify', false);
                        console.log(req.body.email);
                        maindb.findOne({email : req.body.email},(err,user)=>{
                              if(err){
                                    throw err;
                              }
                              if(user){
                                    if(user.password != req.body.password){
                                          res
                                          .json(
                                                {
                                                      success: false,
                                                      message : "user not found"

                                                })   
                                    }else{
                                          const token = jwt.sign({ id: maindb.phone },
                                                                   jwtsecret.secret,
                                                                   { expiresIn: '24h' });
                                          res.json({
                                                token : token,
                                                message : 'success',
                                                success :true
                                          })
                                    } 
                              } else{ 
                                    
                                    res.json({
                                                data : false,
                                                message : "user not found"
                                                }) 
                                                
                                          }
                                    }) 
                              },
          userRegContrl : (req,res,next)=>{
                              console.log("Get")
                          mongoose.set('useFindAndModify', false);
                          userreg.findOne({email : req.body.email},(err, user)=>{
                                if (err) {                     
                                 console.log('error')    
                                } 
                                if(user){
                                      console.log("user exist")
                                      res.json({
                                            message : 'user exist',
                                            success : false
                  
                                      }) 
                                      return false;    
                                }else{
                                      const user = new userreg(  { 
                                            username : req.body.username,
                                            age : req.body.age,
                                            phone : req.body.phone,
                                            worktype : req.body.worktype,
                                            location : req.body.location, 
                                            email : req.body.email,
                                            password :  req.body.password
                                     })
                                
                                     user.save((err)=>{
                                           if(err){
                                                 res.json({
                                                       err : 'err'
                                                 })
                                           } 
                                           console.log("saved succffully")
                                           res.json({
                                                 message : "Data saved",
                                                 success : true     
                                           })
                                     })    
                                }
                          })
                        },
                          userlogincntrl :   (req, res, next)=>{ 
                              mongoose.set('useFindAndModify', false);
                              console.log(req.body.email);
                              console.log(req.body.password)
                              userreg.findOne({email : req.body.email},(err,user)=>{
                                    if(err){
                                          throw err;
                                    }
                                    if(user){
                                          if(user.password != req.body.password){
                                                res
                                                .json(
                                                      {
                                                            success: false,
                                                            message : "user not found"
      
                                                      })   
                                          }else{
                                                const token = jwt.sign({ id: userreg.phone },
                                                                         jwtsecret.secret,
                                                                         { expiresIn: '24h' });
                                                res.json({
                                                      token : token,
                                                      message : 'success',
                                                      success :true
                                                })
                                          } 
                                    } else{ 
                                          
                                          res.json({
                                                      data : false,
                                                      message : "user not found"
                                                      }) 
                                                      
                                                }
                                          }) 
                                    }
                          

                        
                    
                        
                  }