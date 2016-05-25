<?php
	function sharis_website_customize_register( $wp_customize ) {
	
		class WP_Customize_Textarea_Control extends WP_Customize_Control {
			public $type = 'textarea';
		 
			public function render_content() {
				?>
					<label>
						<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
						<textarea rows="5" style="width:100%;" <?php $this->link(); ?>><?php echo esc_textarea( $this->value() ); ?></textarea>
					</label>
				<?php
			}
		}
						
		$wp_customize->add_section(
			'slider_sec',
			array(
				'title' => __('Slider Settings', 'itconsultant'),
				'priority' => null,
				'description' => sprintf( __( 'Featured Image Size Should be ( 1400x648 ) More slider settings available in %s.', 'itconsultant' ), sprintf( '<a href="%1$s" target="_blank">%2$s</a>', esc_url( '"'.SKT_PRO_THEME_URL.'"' ), __( 'PRO Version', 'itconsultant' ))),			
			)
		);
		
		$wp_customize->add_setting('slide1',array(
				'default'	=> get_template_directory_uri().'/images/slides/slide_01.jpg',
				'sanitize_callback'	=> 'esc_url_raw'
		));
		
		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'slide1',
				array(
					'label'	=> __('Add slide image 1','itconsultant'),
					'setting'	=> 'slide1',
					'section'	=> 'slider_sec'
				)
			)
		);
		
		$wp_customize->add_setting('slidetitle1',array(
				'default'	=> __('Use information technology to meet your business objectives.','itconsultant'),
				'sanitize_callback'	=> 'wp_htmledit_pre'
		));
		
		$wp_customize->add_control(
			new WP_Customize_Textarea_Control(
				$wp_customize,
				'slidetitle1',
				array(
					'label'	=>	__('Add slide caption 1 here','itconsultant'),
					'setting'	=>	'slidetitle1',
					'section'	=>	'slider_sec'
				)
			)
		);
		
		$wp_customize->add_setting('slideurl1',array(
				'default'	=> '#1',
				'sanitize_callback'	=> 'esc_url_raw'
		));
		
		$wp_customize->add_control('slideurl1',array(
				'label'	=> __('Add slide link 1 here.','itconsultant'),
				'setting'	=> 'slideurl1',
				'section'	=> 'slider_sec'
		));
	
	}
	add_action( 'customize_register', 'sharis_website_customize_register' );
?>