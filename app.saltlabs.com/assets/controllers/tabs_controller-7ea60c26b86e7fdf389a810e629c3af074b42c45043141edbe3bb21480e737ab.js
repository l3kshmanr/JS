import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ['tab', 'tabContent'];
  }

  toggle(event) {
    event.preventDefault();

    const currentTab = event.target.closest('li');

    if (currentTab.classList.contains('is-active')) return;

    const showAll = currentTab.dataset.tabsShowAll !== undefined;
    const categoryMode = this.tabContentTargets.some(c => c.dataset.tabsFilter);

    this.tabTargets.forEach(tab => {
      tab.classList.toggle('is-active', tab === currentTab);
    });

    if (categoryMode) {
      const selectedCategory = currentTab.dataset.tabsFilter;

      this.tabContentTargets.forEach(content => {
        const visible = showAll || content.dataset.tabsFilter === selectedCategory;
        content.hidden = !visible;
      });
    } else {
      this.tabContentTargets.forEach((content, index) => {
        if (showAll) {
          content.classList.remove('is-hidden');
        } else {
          const filteredTabs = Array.from(this.tabTargets).filter(t => t.dataset.tabsShowAll === undefined);
          content.classList.toggle('is-hidden', filteredTabs.indexOf(currentTab) !== index);
        }
      });
    }
  }
};
