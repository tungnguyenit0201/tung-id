//
//  Secret.m
//  loadingAnimation
//
//  Created by Tung Nguyen on 19/05/2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SecretManagement, NSObject)

RCT_EXTERN_METHOD(readSecret:(NSDictionary*)config :(RCTResponseSenderBlock)callback);
RCT_EXTERN_METHOD(fecthApi:(NSString*)method :(NSString*)enpoint:(NSDictionary*)params :(RCTResponseSenderBlock)callback);

@end
