import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TvInfoPlugin)
public class TvInfoPlugin: CAPPlugin {
    private let implementation = TvInfo()

    @objc func isTv(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.isTv()
        ])
    }
}
