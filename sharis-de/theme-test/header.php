<!DOCTYPE html>
<html>
<head>
<?php wp_head(); ?>	
</head>
<body>
<nav id="nav">
	<div id="sh-header">
		<div class="sh-content-block">
			<span>
				<a href="index.php">
					<?php echo '<img src="'.get_template_directory_uri().'/images/logo.png" width="120px"/>'  ?>
				</a>
			</span>
			<span>
				<?php wp_nav_menu( array('theme_location'  => 'primary', 'container' => '', 'container_class' => '', 'items_wrap' => '<ul>%3$s</ul>' ) ); ?>
			</span>
		</div>
	</div>
 </nav>