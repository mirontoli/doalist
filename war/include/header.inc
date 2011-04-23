<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

	<div id="header">
		<div id="logo"><h1><a href="MainServlet"><img src="img/todosplash.png" width="140" alt="logo"> 
		Do-a-List</a></h1><br><br>

<%
    UserService userService = UserServiceFactory.getUserService();
    User user = userService.getCurrentUser();
	String name = "";
	if(user != null) {
		name = "<div class=\"subtitle\">Salam, " + user.getNickname() + "</div>";
	}
%>
<%= name %>


		</h1></div>
		<div id="navigation">
			<ul>
				<li><a href="MainServlet?operation=register">Register</a></li><li>|</li>
				<li><a href="MainServlet?operation=contact"> Contact</a></li><li>|</li>
				<li><a href="MainServlet?operation=about"> About</a></li><li>|</li>
				<% if(user != null) { %>
            <li class="last"><a href="<%= userService.createLogoutURL(request.getRequestURI()) %>"> Log out</a></li>
            <%} else { %>
            <li class="last"><a href="<%= userService.createLoginURL(request.getRequestURI()) %>"> Log in</a></li>
            <% } %>
				
			</ul>
		</div>
	</div><!--End header-->