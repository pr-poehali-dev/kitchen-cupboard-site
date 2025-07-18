import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-rich-brown">
                CANHEA
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-rich-brown font-lato">Главная</a>
              <a href="#kitchens" className="text-gray-700 hover:text-rich-brown font-lato">Кухни</a>
              <a href="#wardrobes" className="text-gray-700 hover:text-rich-brown font-lato">Шкафы-купе</a>
              <a href="#portfolio" className="text-gray-700 hover:text-rich-brown font-lato">Портфолио</a>
              <a href="#contact" className="text-gray-700 hover:text-rich-brown font-lato">Контакты</a>
            </nav>
            <Button className="bg-rich-brown hover:bg-dark-walnut text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-beige to-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-rich-brown mb-6 animate-fade-in">
              Мебель по индивидуальному заказу
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-lato animate-fade-in">
              Создаем уникальные кухни и шкафы-купе премиум-класса. 
              Качественные материалы, безупречное исполнение, индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-yellow-500 text-rich-brown font-semibold px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-rich-brown text-rich-brown hover:bg-rich-brown hover:text-white px-8 py-3">
                <Icon name="Eye" className="mr-2" size={20} />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-playfair font-bold text-rich-brown mb-4">
              Почему выбирают нас
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-lato">
              Более 15 лет опыта в создании премиальной мебели по индивидуальным проектам
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-rich-brown" />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-rich-brown mb-2">Премиальное качество</h4>
              <p className="text-gray-600 font-lato">Используем только лучшие материалы от европейских производителей</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Ruler" size={32} className="text-rich-brown" />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-rich-brown mb-2">Индивидуальный дизайн</h4>
              <p className="text-gray-600 font-lato">Каждый проект создается с учетом ваших пожеланий и особенностей пространства</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-rich-brown" />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-rich-brown mb-2">Точные сроки</h4>
              <p className="text-gray-600 font-lato">Гарантируем выполнение заказа в оговоренные сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Section */}
      <section id="kitchens" className="py-16 bg-cream-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-playfair font-bold text-rich-brown mb-4">
              Кухни на заказ
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto font-lato">
              Создаем кухни любой сложности: от классических до современных, 
              учитывая все ваши потребности и предпочтения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/1a77f0af-9be2-4a27-b737-e06bfb132420.jpg" 
                  alt="Кухня в стиле минимализм" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-rich-brown">Минимализм</CardTitle>
                <CardDescription className="font-lato">
                  Чистые линии, скрытые ручки, встроенная техника и максимум функциональности
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/5b5c9fca-6257-4554-8ad0-788f7bad5102.jpg" 
                  alt="Кухня в стиле лофт" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-rich-brown">Лофт</CardTitle>
                <CardDescription className="font-lato">
                  Кирпичные стены, индустриальные элементы, открытые конструкции и брутальные материалы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/14edccef-fda5-4aed-85e4-48942f667891.jpg" 
                  alt="Скандинавская кухня" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-rich-brown">Скандинавский стиль</CardTitle>
                <CardDescription className="font-lato">
                  Светлое дерево, белые стены, натуральные материалы и уютная атмосфера
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/39071caa-819b-4fc6-9637-01356e823d68.jpg" 
                  alt="Кухня в стиле хай-тек" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-rich-brown">Хай-тек</CardTitle>
                <CardDescription className="font-lato">
                  Глянцевые поверхности, LED-подсветка, стекло и интеграция современных технологий
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-md mx-auto">
              <div className="aspect-video bg-gradient-to-br from-rich-brown to-dark-walnut flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="Plus" size={48} className="mx-auto mb-4" />
                  <p className="font-playfair text-lg">Ваш проект</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-rich-brown">Индивидуальный дизайн</CardTitle>
                <CardDescription className="font-lato">
                  Создадим кухню вашей мечты с учетом всех ваших пожеланий
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
            <h4 className="text-2xl font-playfair font-bold text-rich-brown mb-6">Разновидности кухонь</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="font-lato">
                <h5 className="font-semibold text-rich-brown mb-3">По стилю:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Современные (минимализм, хай-тек)</li>
                  <li>• Классические (неоклассика, прованс)</li>
                  <li>• Лофт и индустриальный стиль</li>
                  <li>• Скандинавский стиль</li>
                </ul>
              </div>
              <div className="font-lato">
                <h5 className="font-semibold text-rich-brown mb-3">По планировке:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Прямые и угловые кухни</li>
                  <li>• П-образные и островные</li>
                  <li>• Кухни-гостиные</li>
                  <li>• Компактные решения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wardrobes Section */}
      <section id="wardrobes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-playfair font-bold text-rich-brown mb-4">
              Шкафы-купе
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto font-lato">
              Функциональные и стильные шкафы-купе, которые максимально используют пространство 
              и гармонично вписываются в интерьер
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/3504b678-6ec4-4808-8077-a3feefe4f62f.jpg" 
                alt="Элегантный шкаф-купе" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-playfair font-bold text-rich-brown mb-6">
                Преимущества наших шкафов-купе
              </h4>
              <div className="space-y-4 font-lato">
                <div className="flex items-start">
                  <Icon name="Check" className="text-gold mr-3 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-rich-brown">Максимальная функциональность</h5>
                    <p className="text-gray-700">Продуманная внутренняя планировка для оптимального использования пространства</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Check" className="text-gold mr-3 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-rich-brown">Надежные механизмы</h5>
                    <p className="text-gray-700">Качественная фурнитура и направляющие от ведущих производителей</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Check" className="text-gold mr-3 mt-1" size={20} />
                  <div>
                    <h5 className="font-semibold text-rich-brown">Индивидуальный дизайн</h5>
                    <p className="text-gray-700">Любые размеры, материалы и варианты отделки фасадов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="contact" className="py-16 bg-cream-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair font-bold text-rich-brown mb-4">
              Заказать консультацию
            </h3>
            <p className="text-gray-700 font-lato">
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
            </p>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-rich-brown mb-2 font-lato">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-rich-brown mb-2 font-lato">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-rich-brown mb-2 font-lato">
                    Что вас интересует?
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 font-lato">
                    <option>Выберите тип мебели</option>
                    <option>Кухня на заказ</option>
                    <option>Шкаф-купе</option>
                    <option>Кухня + шкаф-купе</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-rich-brown mb-2 font-lato">
                    Дополнительные пожелания
                  </label>
                  <Textarea placeholder="Расскажите о ваших пожеланиях, размерах помещения, предпочтениях в стиле..." />
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-gold hover:bg-yellow-500 text-rich-brown font-semibold px-12 py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rich-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-playfair font-bold mb-4">CANHEA</h4>
              <p className="text-gray-300 font-lato">
                Создаем уникальную мебель по индивидуальным заказам с 2008 года
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 font-lato">Контакты</h5>
              <div className="space-y-2 text-gray-300 font-lato">
                <p className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@elitemebel.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={16} />
                  Москва, ул. Мебельная, 15
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 font-lato">Услуги</h5>
              <ul className="space-y-2 text-gray-300 font-lato">
                <li>Кухни на заказ</li>
                <li>Шкафы-купе</li>
                <li>Дизайн-проект</li>
                <li>Монтаж и установка</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-400 font-lato">
            <p>&copy; 2024 CANHEA. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;