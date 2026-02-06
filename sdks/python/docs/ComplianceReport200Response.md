# ComplianceReport200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ComplianceReport200ResponseData**](ComplianceReport200ResponseData.md) |  | [optional] 

## Example

```python
from sipher_client.models.compliance_report200_response import ComplianceReport200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceReport200Response from a JSON string
compliance_report200_response_instance = ComplianceReport200Response.from_json(json)
# print the JSON string representation of the object
print(ComplianceReport200Response.to_json())

# convert the object into a dict
compliance_report200_response_dict = compliance_report200_response_instance.to_dict()
# create an instance of ComplianceReport200Response from a dict
compliance_report200_response_from_dict = ComplianceReport200Response.from_dict(compliance_report200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


