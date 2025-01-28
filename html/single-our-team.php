<?php get_header(); ?>

<section class="about-bio-section relative">
    <!-- background bg-->
    <div class="about-bio-bg background-bg">
        <figure class="object-fit" role="none">
            <img src="<?php echo get_template_directory_uri(); ?>/images/bio-bg@2x.jpg" alt="bio bg">
        </figure>
        <div class="about-bio-overlay background-bg"></div>
    </div>
    <div class="container">
        <div class="about-bio-main flex">
            <?php
            $profile_image = get_field('team_profile_image');
            $first_name = get_field('team_first_name');
            $last_name = get_field('team_last_name');
            $title_position = get_field('team_title_position');
            $location = get_field('team_location');
            $email = get_field('team_email');
            $phone_number_text = get_field('team_phone_number_text');
            $phone_number = get_field('team_phone_number');
            $fax_number_text = get_field('team_fax_number_text');
            $fax_number = get_field('team_fax_number');
            $v_card = get_field('team_v_card');
            $linkedin = get_field('team_linkedin');
            $description = get_field('team_description');

            if ($profile_image || $first_name || $last_name || $title_position || $location || $email || $phone_number || $fax_number || $v_card || $linkedin) {
            ?>
                <div class="about-bio-left">
                    <div class="about-bio-list">
                        <div class="about-bio-img relative">
                            <?php if ($profile_image) { ?>
                                <figure class="object-fit" role="none">
                                    <img src="<?php echo $profile_image['url']; ?>" alt="<?php echo $profile_image['alt']; ?>" title="<?php echo $profile_image['alt']; ?>">
                                </figure>
                            <?php } ?>
                        </div>

                        <div class="about-bio-con">
                            <?php if ($first_name || $last_name || $title_position) { ?>
                                <div class="about-bio-info hide-desktop">
                                    <?php if ($first_name || $last_name) { ?>
                                        <h1><?php echo $first_name . ' ' . $last_name; ?></h1>
                                    <?php }
                                    if ($title_position) { ?>
                                        <span><?php echo $title_position; ?></span>
                                    <?php } ?>
                                </div>
                            <?php } ?>

                            <ul class="bio-links">
                                <?php if ($location) { ?>
                                    <li><i class="fa-regular fa-location-dot"></i><?php echo $location; ?></li>
                                <?php } ?>
                                <?php if ($email) { ?>
                                    <li><a class="flex flex-vcenter" href="mailto:<?php echo $email; ?>"><i class="fa-regular fa-envelope"></i><?php echo $email; ?></a></li>
                                <?php } ?>
                                <?php if ($phone_number) { ?>
                                    <li><a class="flex flex-vcenter" href="tel:<?php echo $phone_number; ?>"><i class="fa-regular fa-phone"></i><?php echo $phone_number_text; ?></a></li>
                                <?php } ?>
                                <?php if ($fax_number) { ?>
                                    <li><a class="flex flex-vcenter" href="tel:<?php echo $fax_number; ?>"><i class="fa-regular fa-fax"></i><?php echo $fax_number_text; ?></a></li>
                                <?php } ?>
                                <?php if ($v_card) { ?>
                                    <li><a class="flex flex-vcenter" href="<?php echo $v_card['url']; ?>" download><i class="fa-regular fa-id-card"></i>Download V-Card</a></li>
                                <?php } ?>
                                <?php if ($linkedin) { ?>
                                    <li><a class="flex flex-vcenter" href="<?php echo $linkedin; ?>" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i>Connect on LinkedIn</a></li>
                                <?php } ?>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php } ?>

            <?php
            
            $bg_color = get_field('team_make_an_appointment_background_color');
            $sub_heading = get_field('team_make_an_appointment_sub_heading');
            $heading = get_field('team_make_an_appointment_heading');
            $button_text_one = get_field('team_make_an_appointment_button_text_one');
            $button_link_one = get_field('team_make_an_appointment_button_link_one');
            $button_text_two = get_field('team_make_an_appointment_button_text_two');
            $button_link_two = get_field('team_make_an_appointment_button_link_two');

            if ($first_name || $last_name || $title_position || $bg_color || $sub_heading || $heading || ($button_text_one && $button_link_one) || ($button_text_two && $button_link_two)) { ?>
            <div class="about-bio-right relative">
            <?php if ($first_name || $last_name || $title_position || $description) { ?> 
            <div class="about-bio-right-main relative">
                    <?php if ($first_name || $last_name || $title_position) { ?>
                        <div class="about-bio-info hide-tablet hide-mobile">
                            <?php if ($first_name || $last_name) { ?>
                                <h1 class="h2"><?php echo $first_name . ' ' . $last_name; ?></h1>
                            <?php }
                            if ($title_position) { ?>
                                <span><?php echo $title_position; ?></span>
                            <?php }  ?>
                        </div>
                    <?php }
                    if ($description) {
                        echo  $description;
                    } ?>
                </div>
                <?php } ?>

                <?php
               

                if ($bg_color || $sub_heading || $heading || ($button_text_one && $button_link_one) || ($button_text_two && $button_link_two)) {
                ?>
                  
                   <div class="blue-block-wrap">
                    <?php if ($bg_color ) { ?>
                        <div class="blue-block-desc"  style="background-color: <?php echo $bg_color; ?>;">
                        <?php } else { ?>
                            <div class="blue-block-desc">
                            <?php } if ($sub_heading) { ?>
                               <p> <?php echo $sub_heading; ?></p>
                            <?php } ?>

                            <?php if ($heading ||  $first_name || $last_name) { ?>
                                <h3><?php echo $heading . ' ' . $first_name . ' ' . $last_name; ?></h3>
                            <?php } ?>
                            <?php if  (($button_text_one && $button_link_one) || ($button_text_two && $button_link_two)) { ?>
                            <div class="blue-block-btns">
                                <div class="blue-block-btn flex">
                                    <?php if ($button_text_one && $button_link_one) { ?>
                                        <a class="button btn-white-bg btn-hover-navy text-black blue-i flex flex-vcenter" href="<?php echo $button_link_one; ?>">
                                            <i class="transition fa-regular fa-calendar-plus"></i><?php echo $button_text_one; ?>
                                        </a>
                                    <?php } ?>

                                    <?php if ($button_text_two && $button_link_two) { ?>
                                        <a class="button no-border btn-hover-navy flex flex-vcenter" href="<?php echo $button_link_two; ?>">
                                            <?php echo $button_text_two; ?>
                                            <i class="transition white-50 fa-sharp fa-regular fa-phone-volume"></i>
                                        </a>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
            </div>
            <?php } ?>
        </div>
        <?php } ?>  
    </div>
</section>


<?php get_footer(); ?>