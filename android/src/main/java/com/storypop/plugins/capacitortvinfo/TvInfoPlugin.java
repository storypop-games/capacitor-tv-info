package com.storypop.plugins.tvinfo;

import android.content.Context;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "TvInfo")
public class TvInfoPlugin extends Plugin {

    private TvInfo implementation;

    @Override
    public void load() {
        implementation = new TvInfo(getContext());
    }

    @PluginMethod
    public void isTv(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.isTv());
        call.resolve(ret);
    }

    public Context getContext() {
        return this.bridge.getContext();
    }
}
