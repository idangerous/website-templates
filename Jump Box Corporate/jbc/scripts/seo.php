<?php
/*
Set the page Titles, Meta Keys and Meta Description
*/
$jBox_isIncluded = defined("jBox");
$jBox_isAjaxed = $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
if(!($jBox_isIncluded||$jBox_isAjaxed)) {
	header("Location: ../index.php");
}
switch($_GET['page']) {
	/* Contacts */
	case "contacts" : {
		$mTitle = "Contacts | jBox.Corporate";
		$mKeys = "ajax, animation, jbox, jump box, one page, template, idangerous, idangero.us";
		$mDescr = "Get in touch with jBox.Corporate";
	}
	break;
	/* Features Pages */
	case "features": {
		$mTitle = "Template Features | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "ajax": {
		$mTitle = "Template Features - Ajax Features | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "browser" : {
		$mTitle = "Template Features - Browser Compatibility | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "config" : {
		$mTitle = "Template Features - Configuration | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "hover" : {
		$mTitle = "Template Features - Hover Effects | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "popups": {
		$mTitle = "Template Features - Amazing Popups | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "transitions" : {
		$mTitle = "Template Features - Page Transitions | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	case "typography" : {
		$mTitle = "Template Features - Typography | jBox.Corporate";
		$mKeys = "ajax features, browser compatibility, hover effects, transitions, chopslider";
		$mDescr = "Amazing jBox.Corporate features";
	}
	break;
	/* Portfolio Pages */
	case "portfolio" : {
		$mTitle = "Portfolio | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-2" : {
		$mTitle = "Portfolio - 2 Columns Grid | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-2t": {
		$mTitle = "Portfolio - 2 Columns Grid v2 | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-3": {
		$mTitle = "Portfolio - 3 Columns Grid | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-3t" : {
		$mTitle = "Portfolio - 3 Columns Grid v2 | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-4": {
		$mTitle = "Portfolio - 4 Columns Grid | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	case "portfolio-mixed" : {
		$mTitle = "Portfolio - Mixed | jBox.Corporate";
		$mKeys = "portfolio, design, logo design, web design, development";
		$mDescr = "Best works of jBox.Corporate";
	}
	break;
	/* Sample Pages */
	case "blog" : {
		$mTitle = "Blog | jBox.Corporate";
		$mKeys = "html, css, jquery, blog, web design blog, developers blog";
		$mDescr = "Blog about web design and development";
	}
	break;
	case "blog-post" : {
		$mTitle = "Blog Post | jBox.Corporate";
		$mKeys = "html, css, jquery, blog, web design blog, developers blog";
		$mDescr = "Post about Animation and Ajax";
	}
	break;
	case "testimonials" : {
		$mTitle = "Testimonials | jBox.Corporate";
		$mKeys = "testimonials, jbox, idangerous";
		$mDescr = "Clients think about us";
	}
	break;
	case "article" : {
		$mTitle = "Fullwide Article | jBox.Corporate";
		$mKeys = "article, text, html5, css3";
		$mDescr = "Page with sample article";
	}
	break;
	case "article-sb" : {
		$mTitle = "Article with sidebar | jBox.Corporate";
		$mKeys = "article, text, html5, css3, sidebar, jQuery";
		$mDescr = "Page with sample article and sidebar";
	}
	break;
	/* Home Page */
	default : {
		$mTitle = "jBox.Corporate - Premium animated Ajax based website template by iDangero.us";
		$mKeys = "ajax, animation, jbox, jump box, one page, template, idangerous, idangero.us";
		$mDescr = "Best animated Ajax Based website template";
	};
	break;
}
if($jBox_isAjaxed) echo $mTitle;
?>