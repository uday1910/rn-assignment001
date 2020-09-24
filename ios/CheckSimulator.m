//
//  CheckSimulator.m
//  Assignment
//
//  Created by Uday Patel on 23/09/20.
//

#import "CheckSimulator.h"

@implementation CheckSimulator

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(checkForDeviceOrSimulator:(RCTResponseSenderBlock)callback)
{
  NSString *isDevice;
  
  #if TARGET_IPHONE_SIMULATOR
       // Simulator
  isDevice = @"false";
   #else
       // Device
  isDevice = @"true";
   #endif
  
   callback(@[isDevice]);
}

@end
