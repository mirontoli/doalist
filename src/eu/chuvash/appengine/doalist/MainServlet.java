package eu.chuvash.appengine.doalist;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserServiceFactory;

@SuppressWarnings("serial")
public class MainServlet extends HttpServlet {
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		doPost(req, resp);
	}

	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
//		com.google.appengine.api.users.UserService userService = UserServiceFactory.getUserService();
//        User user = userService.getCurrentUser();
//        req.setAttribute("loggedInAs", user);
		
		req.setAttribute("goesThroughMainServlet", new Boolean(true));
		//this is in order to be able to track where requests come from
		//all request which invoke jsp-files directly will be stripped.
		//this will happen in include/validate.inc
		//all other validating will happen here, in Controller role MainServlet
		
		resp.setContentType(CONTENT_TYPE);
		String url = "/about.jsp";
		String operation = req.getParameter("operation");
		if (operation != null) {
			if (operation.equals("about")) {
				url = "/about.jsp";
			}
			else if (operation.equals("contact")) {
				url = "/contact.jsp";
			}
			else if (operation.equals("register") /* && user == null*/) {
				url = "/register.jsp";
			}
		}

		RequestDispatcher dispatcher = getServletContext()
				.getRequestDispatcher(url);
		try {
			dispatcher.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//resp.sendRedirect("/about.jsp");
	}
}
