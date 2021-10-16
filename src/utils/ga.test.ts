import * as ga from "./ga"
// @ponicode
describe("ga.pageview", () => {
    test("0", () => {
        let callFunction: any = () => {
            ga.pageview("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            ga.pageview("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            ga.pageview("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            ga.pageview("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            ga.pageview("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            ga.pageview("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ga.gaEvent", () => {
    test("0", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: "discard", category: "Foo bar", label: "AOP", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: { type: "RECEIVE_MESSAGE" }, category: "Foo bar", label: "label_2", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: "SHUTDOWN", category: "This is a Text", label: "ISO 22000", value: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: "assign", category: "This is a Text", label: "AOP", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: "discard", category: "This is a Text", label: "ISO 9001", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            ga.gaEvent({ action: {}, category: "", label: "", value: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
