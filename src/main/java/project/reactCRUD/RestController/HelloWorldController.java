package project.reactCRUD.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@GetMapping("/api/hello")
	public String test() {
		return "Hello, React!, and My Future!";
	}
}
