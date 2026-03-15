import Button from "@rescui/button";
import {Tab, TabList, TabSeparator} from "@rescui/tab-list";
import {useTextStyles} from "@rescui/typography";
import cn from "classnames";
import {useEffect, useState} from "react";



export const codeTabs = [
	{ title: "Concise", code: `data class Employee(
   val name: String,
   val email: String,
   val company: String
) // + automatically generated equals(), hashCode(), toString(), and copy()

object MyCompany {                                // A singleton
   const val name: String = "MyCompany"
}

fun main() {                                      // Function at the top level
   val employee = Employee("Alice",               // No \`new\` keyword
      "alice@mycompany.com", MyCompany.name)
   println(employee)
}` },
	{ title: "Safe", code: `fun reply(condition: Boolean): String? =          // Nullability is part of Kotlin's type system
   if (condition) "I'm fine" else null

fun error(): Nothing =                            // Always throw an exception
   throw IllegalStateException("Shouldn't be here")

fun main() {
   val condition = true                        // Try replacing \`true\` with \`false\` and run the sample!
   val message = reply(condition)              // The result is nullable
   // println(message.uppercase())             // This line doesn't compile
   println(message?.replace("fine", "okay"))   // Access a nullable value in a safe manner
   if (message != null) {                      // If you check that the type is right,
      println(message.uppercase())             // the compiler will smart-cast it for you
   }

   val nonNull: String =                             // If the null-case throws an error,
   reply(condition = true) ?: error()             // Kotlin can infer that the result is non-null
   println(nonNull)
}` },
	{ title: "Expressive", code: `fun main() {
   val map = mapOf(1 to "one", 2 to "two")
   for ((k, v) in map) {                            // Traverse a map or a list of pairs
       println("$k -> $v")
   }

   fun obtainKnowledge() = Pair("The Answer", 42)   // Single-expression functions

   val (description, answer) = obtainKnowledge()    // Destructure into a pair of two variables
   println("$description: $answer")

   getText()?.let {                                 // Apply an action to a nullable expression
      sendEmailTo("alice@example.com", it)          // if it's not null
   }

   createEmptyWindow()
      .apply {                                    // Configure properties of an object
         width = 300
         height = 200
         isVisible = true
      }.also { w ->                               // Perform an additional operation on a call chain
         showWindow(w)
      }

   val fixedIssue = issueById["13456"]
       ?.takeIf { it.status == Status.FIXED }       // Use the value only if the condition is true
   println(fixedIssue)
}` },
	{ title: "Interoperable", code: `// Use any existing JVM library or framework
// Call Kotlin code from Java without an issue

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
   runApplication<DemoApplication>(*args)
}

@RestController
class MessageResource {
   @GetMapping
   fun index(): List<Message> = listOf(
      Message("1", "Hello!"),
      Message("2", "Bonjour!"),
      Message("3", "Privet!"),
   )
}

data class Message(val id: String?, val text: String)` },
	{ title: "Multiplatform", code: `// Common
// Declare signatures to use them in the common code
// Provide platform-specific implementations in the platform modules
expect fun randomUUID(): String

expect class PlatformSocket(
       url: String
) {
    fun openSocket(listener: PlatformSocketListener)
    fun closeSocket(code: Int, reason: String)
    fun sendMessage(msg: String)
}

interface PlatformSocketListener {
    fun onOpen()
    fun onFailure(t: Throwable)
    fun onMessage(msg: String)
    fun onClosing(code: Int, reason: String)
}` },
] as const;


function ProgrammingLanguage() {
	const textCn = useTextStyles();
	const [activeIndex, setActiveIndex] = useState(0);
	const [highlighted, setHighlighted] = useState<string>("");
	
	useEffect(() => {
		void Promise.all([
			import(/* @vite-ignore */ "highlight.js/lib/core"),
			import(/* @vite-ignore */ "highlight.js/lib/languages/kotlin"),
		]).then(([hljsModule, kotlinLang]) => {
			const hljs = hljsModule.default as {
				registerLanguage: (name: string, lang: unknown) => void;
				highlightBlock?: (el: HTMLElement) => void;
				highlightElement?: (el: HTMLElement) => void;
			};
			hljs.registerLanguage("kotlin", kotlinLang.default);
			const el = document.createElement("code");
			el.className = "language-kotlin";
			el.textContent = codeTabs[activeIndex].code;
			if (hljs.highlightBlock) hljs.highlightBlock(el);
			else if (hljs.highlightElement) hljs.highlightElement(el);
			setHighlighted(el.innerHTML);
		});
	}, [activeIndex]);
	
	return (
		<div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
			<div className="kto-col-4 kto-col-md-12">
				<h3 className={textCn("rs-h2")}>
					Modern, concise and safe programming language
				</h3>
				<p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
					Easy to pick up, so you can create powerful applications immediately.
				</p>
				<div className="kto-offset-top-32">
					<Button mode="outline" size="l" href="/docs/getting-started.html">
						Get started
					</Button>
				</div>
			</div>
			<div className="kto-col-8 kto-col-md-12">
				<TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
					{codeTabs.map((tab, i) => (
						<Tab key={i}>{tab.title}</Tab>
					))}
				</TabList>
				<TabSeparator />
				<pre className="programming-language__code kto-offset-top-16">
          <code
	          className="hljs"
	          dangerouslySetInnerHTML={{ __html: highlighted || codeTabs[activeIndex].code }}
          />
        </pre>
			</div>
		</div>
	);
}

export default ProgrammingLanguage;