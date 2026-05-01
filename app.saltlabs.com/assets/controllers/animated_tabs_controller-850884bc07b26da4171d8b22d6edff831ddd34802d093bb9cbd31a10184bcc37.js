import { Controller } from "@hotwired/stimulus"

// similar to tabs controller, but uses is-soft-hidden for animation support
export default class extends Controller {
  static get targets() {
    return ['tab', 'tabContent'];
  }

  toggle(event) {
    event.preventDefault();

    const currentTab = event.target.closest('li');

    if (currentTab.classList.contains('is-active')) return;

    this.tabTargets.forEach(tab => {
      tab.classList.toggle('is-active', tab === currentTab);
    });

    this.tabContentTargets.forEach((content) => {
      content.classList.add('is-soft-hidden');
      if (content.classList.contains('is-active')) {
        content.classList.remove('is-active');
        content.classList.add('with-animation');
      }
    });

    const tabIndex = Array.from(this.tabTargets).indexOf(currentTab);
    const currentTabContent = this.tabContentTargets[tabIndex];
    currentTabContent.classList.add('is-active');
    currentTabContent.classList.remove('is-soft-hidden');
    currentTabContent.classList.add('with-animation');
  }
};
