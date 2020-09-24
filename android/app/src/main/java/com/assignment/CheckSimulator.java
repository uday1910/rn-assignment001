package com.assignment;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CheckSimulator extends ReactContextBaseJavaModule {
  public CheckSimulator(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "VideoPlayer";
  }

  @ReactMethod
  public String checkForDeviceOrSimulator() {
    return "android";
  }
}