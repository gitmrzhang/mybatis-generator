generatorConfig.xml中配置更改
javaClientGenerator ： type = "ANNOTATEDMAPPER" 
生成的对象是 MyBatis 3.x 映射器基础结构的 Java接口。 这些接口将会基于注解和 MyBatis 3.x SqlProviders。不会有XML文件生成。（注：就是纯接口使用注解的形式，不会有XML文件）
ANNOTATEDMAPPER 依赖 MyBatis 3.0.4 或更高版本。targetRuntime=MyBatis3