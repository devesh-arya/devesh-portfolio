export type Lang = "en" | "fr";

export interface MetaItem {
  lbl: string;
  val: string;
}

export interface CsBox {
  cls: "b1" | "b2" | "b3";
  title: string;
  text: string;
}

export interface CsRole {
  text: string;
  items: string[];
}

export interface CsSection {
  slabel: string;
  stitle: string;
  stext: string;
  callout?: string;
  boxes?: CsBox[];
  role?: CsRole;
}

export interface CaseStudy {
  tag: string;
  title: string;
  subtitle: string;
  meta: MetaItem[];
  sections: CsSection[];
}

export interface Project {
  slug: string;
  featured: boolean;
  tag: string;
  tagText: string;
  name: string;
  desc: string;
  imgType: "img" | "gradient";
  imgKey?: string;
  imgGrad?: string;
  pills: string[];
  cs: CaseStudy;
}

export interface Translation {
  // Nav
  nav_home: string;
  nav_projects: string;
  nav_about: string;
  nav_connect: string;
  // Hero
  hero_tag: string;
  hero_sub: string;
  hero_bio: string;
  hero_btn1: string;
  hero_btn2: string;
  stat_l1: string;
  stat_l2: string;
  stat_l3: string;
  stat_l4: string;
  loc_text: string;
  // Home sections
  home_proj_label: string;
  home_proj_title: string;
  home_proj_viewall: string;
  hc_tag: string;
  hc_title: string;
  hc_body: string;
  hc_btn: string;
  hc1_t: string; hc1_s: string;
  hc2_t: string; hc2_s: string;
  hc3_t: string; hc3_s: string;
  hc4_t: string; hc4_s: string;
  // Projects
  proj_label: string;
  proj_title: string;
  proj_sub: string;
  // About
  about_label: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  exp_title: string;
  exp_role: string;
  exp_co: string;
  exp_dur: string;
  exp_desc: string;
  edu_title: string;
  edu_role: string;
  edu_co: string;
  edu_dur: string;
  edu_desc: string;
  skills_title: string;
  // Connect
  connect_label: string;
  connect_h: string;
  connect_sub: string;
  con1_t: string; con1_s: string;
  con2_t: string; con2_s: string;
  con3_t: string; con3_s: string;
  con4_t: string; con4_s: string;
  avail_title: string;
  avail1: string;
  avail2: string;
  avail3: string;
  avail_rt: string;
  avail_rv: string;
  why_title: string;
  why1: string; why2: string; why3: string; why4: string; why5: string;
  // read_cs / back
  read_cs: string;
  back_projects: string;
}
