package com.storypop.plugins.tvinfo;

import static java.security.AccessController.getContext;

import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;

public class TvInfo {

    private Context _context;
    public static final String TAG = "DeviceTypeRuntimeCheck";

    public TvInfo(Context context) {
        _context = context;
    }

    public boolean isTv() {
        boolean isTelevision = _context.getPackageManager().hasSystemFeature(PackageManager.FEATURE_LEANBACK);
        return isTelevision;
    }
}
