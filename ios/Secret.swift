//
//  Secret.swift
//  loadingAnimation
//
//  Created by Tung Nguyen on 19/05/2022.
//

import Foundation
import React

import Secret

@objc(SecretManagement)
class SecretManagement: NSObject {
  let manager = ManagerSecret(key: "123")
  
  @objc func readSecret(_ config: [String: Any],_ callback: @escaping RCTResponseSenderBlock) -> String {
    
    manager.logTest()
    let secret = manager.readSecret()
    if (secret != nil) {
      print("secret: \(String(describing: secret) )")
    } else {
      print("secret fail")
    }
    
    
    callback([NSNull(), String(describing: secret)])
    return String(describing: secret)
  }
  
  @objc func fecthApi(_ method: String,_ enpoint: String,_ params: [String: Any], _ callback: @escaping RCTResponseSenderBlock) {
    
    guard let url = URL(string: "https://api-dev.citizen.com.vn/api/auth/v4" + enpoint) else {return}
    
    var request = URLRequest(url:url)
    request.httpMethod = method
    request.setValue("Application/json", forHTTPHeaderField: "Content-type")
    request.addValue("Client-Id", forHTTPHeaderField: "XbzR8bJNDn6aiZyPuOyn0lfj334a")
    request.addValue("Client-Secret", forHTTPHeaderField: "tvyPjKmTuMh2SpNk7kKO9T9ukGQa")
    let firstKey = Array(params.keys)[0]
    if method != "GET" && params.isEmpty(){
        request.httpBody = params
//      request.httpBody = try? JSONSerialization.data(withJSONObject: param, options: [])
    }
    
    URLSession.shared.dataTask(with: request  ) {
      data, response, error in
      if let error = error {
        print("Error: `\(error.localizedDescription)")
      } else {
        let jsonRes = try? JSONSerialization.jsonObject(with: data!, options: [])
        callback([NSNull(), String(describing: jsonRes)])
        print("data: `\(jsonRes)")
      }
    }.resume()
    
  }
  
  
  
  
  
}
